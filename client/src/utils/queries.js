import { gql } from '@apollo/client';

export const QUERY_REQUESTS = gql`
 query requests {
    requests {
      username
      requestText
      createdAt
      _id
    }
  }
`;

export const QUERY_REQUEST = gql`
  query request($id: ID!) {
    request(_id: $id) {
      _id
      requestText
      createdAt
      username
      reactionCount
      reactions {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }
`;

export const QUERY_ALL_USERS = gql`
 query   users {
  users { 
  _id
    email
    friendCount
    username
  }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      friendCount
      friends {
        _id
        username
      }
      requests {
        _id
        requestText
        createdAt
 
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      friendCount
      requests {
        _id
        requestText
        createdAt
        reactionCount
        reactions {
          _id
          createdAt
          reactionBody
          username
        }
      }
      friends {
        _id
        username
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;
