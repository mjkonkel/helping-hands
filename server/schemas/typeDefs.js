const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    requests: [Request]
    friends: [User]
  }

  type Request {
    _id: ID
    requestText: String
    createdAt: String
    username: String
  }

  type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    requests: [Request]
    request(_id: ID!): Request
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addRequest(requestText: String!): Request
    addReaction(requestId: ID!, reactionBody: String!): Request
    addFriend(friendId: ID!): User
  }
`;

module.exports = typeDefs;