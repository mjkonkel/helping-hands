const { AuthenticationError } = require('apollo-server-express');
const { User, Request } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('requests')
          .populate('friends');

        return userData;
      }
      throw new AuthenticationError('Not logged in');
    },
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('requests')
        .populate('friends');
    },
    user: async (parent, { username }) => {
      console.log('usernameeeee', username)
      const userData = await User.findOne({ username })
        .select('-__v -password')
        .populate('requests');
      console.log(userData)
      return userData
    },
    requests: async (parent, { username }) => {

      return Request.find().sort({ createdAt: -1 });
    },
    request: async (parent, { _id }) => {
      return Request.findOne({ _id });
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    addRequest: async (parent, args, context) => {
      if (context.user) {
        const request = await Request.create({ ...args, username: context.user.username });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { requests: request._id } },
          { new: true }
        );

        return request;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addReaction: async (parent, { requestId, reactionBody }, context) => {
      if (context.user) {
        const updatedRequest = await Request.findOneAndUpdate(
          { _id: requestId },
          { $push: { reactions: { reactionBody, username: context.user.username } } },
          { new: true, runValidators: true }
        );

        return updatedRequest;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addFriend: async (parent, { friendId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { friends: friendId } },
          { new: true }
        ).populate('friends');

        return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    }
  }
};

module.exports = resolvers;
