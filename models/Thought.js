const { Schema, model } = require('mongoose');

// Schema for what makes up a thought; shape of parent document
const thoughtSchema = new Schema(
{
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // get: function(Date){
        //    return Date.now.toDateString;
        // },
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema],
    toJSON: {
        getters: true,
        virtuals: true,
      },
});

// reaction subdocument schema
const reactionSchema = new Schema(
{
    reactionId: { 
        type: ObjectId, 
        default: true,
     },
    reactionBody: {
        type: String, 
        required: true,
        maxLength: 280,
    },
    username: {
        type: String,
        required: true, 
    },
    createdAt: {
        type: Date,
        default: Date.now,
     // get: function(Date){
        //    return Date.now.toDateString;
        // },
    },
    toJSON: {
        getters: true,
      },
  });

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
  });

const Thought = model('thought', thoughtSchema);

module.exports = Thought;