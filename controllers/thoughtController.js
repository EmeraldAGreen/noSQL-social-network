const { ObjectId } = require('mongoose').Types;
const { Thought, User } = require('../models');

// Aggregate function to get the number of Thoughts overall
// const thoughtCount = async () =>
//   Thought.aggregate()
//     .count('ThoughtCount')
//     .then((numberOfThoughts) => numberOfThoughts);

module.exports = {
  // Get all Thoughts
  getAllThoughts(req, res) {
    Thought.find()
      .then(async (Thoughts) => {
        const ThoughtObj = {
          Thoughts,
        //   headCount: await headCount(),
        };
        return res.json(ThoughtObj);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Get a single Thought
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.ThoughtId })
      .select('-__v')
      .then(async (Thought) =>
        !Thought
          ? res.status(404).json({ message: 'No Thought with that ID' })
          : res.json({
              Thought,
            //   grade: await grade(req.params.ThoughtId),
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // create a new Thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((Thought) => res.json(Thought))
      .catch((err) => res.status(500).json(err));
  },
// createThought(req, res) {
//     Thought.findOneAndUpdate(
//     {_id: req.params.id},
//     {$push: {thoughts: params.thoughtId}},
//     {new:true})
//     .populate({path: 'thoughts'})
//       .select('-__v')
//       .then((User) =>
//         !User
//           ? res.status(404).json({ message: 'No User with that ID' })
//           : res.json(User)
//       )
//       .catch((err) => res.status(500).json(err));
//   },

  // update a Thought
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.ThoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((Thought) =>
        !Thought
          ? res.status(404).json({ message: 'No Thought with this id!' })
          : res.json(Thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Delete a Thought and remove them from the User
  removeThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.ThoughtId })
      .then((Thought) =>
        !Thought
          ? res.status(404).json({ message: 'No such Thought exists' })
          : User.findOneAndUpdate(
              { Thoughts: req.params.ThoughtId },
              { $pull: { Thoughts: req.params.ThoughtId } },
              { new: true }
            )
      )
      .then((User) =>
        !User
          ? res.status(404).json({
              message: 'Thought deleted, but no Users found',
            })
          : res.json({ message: 'Thought successfully deleted' })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Add an reaction to a Thought
  createReaction(req, res) {
    console.log('You are adding a reaction');
    console.log(req.body);
    Thought.findOneAndUpdate(
      { _id: req.params.ThoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((Thought) =>
        !Thought
          ? res
              .status(404)
              .json({ message: 'No Thought found with that ID :(' })
          : res.json(Thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Remove reaction from a Thought
  removeReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.ThoughtId },
      { $pull: { reaction: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((Thought) =>
        !Thought
          ? res
              .status(404)
              .json({ message: 'No Thought found with that ID :(' })
          : res.json(Thought)
      )
      .catch((err) => res.status(500).json(err));
  },
};
