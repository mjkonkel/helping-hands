const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    reuqest: [Request]
    friends: [User]
  }

  type Request {
    _id: ID
    requestText: String
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
    requests(username: String): [Reuqest]
    request(_id: ID!): request
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addrequest(thoughtText: String!): Request
    addReaction(requestId: ID!, reactionBody: String!): request
    addFriend(friendId: ID!): User
  }
`;

module.exports = typeDefs;