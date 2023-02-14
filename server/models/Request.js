const { Schema, model } = require('mongoose');
// const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat');

const requestSchema = new Schema(
    {
      requestText: {
        type: String,
        required: 'You need to create a request!',
        minlength: 1,
        maxlength: 280
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
      },
      username: {
        type: String,
        required: true
      },
    //   reactions: [reactionSchema]
    },
    {
      toJSON: {
        getters: true
      }
    }
  );
  
  requestSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });
  
  const Request = model('Request', requestSchema);
  
  module.exports = Request;
  