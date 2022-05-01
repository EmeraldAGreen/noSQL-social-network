const { User, Thought } = require('../models');

module.exports = {
  // Get all Users
  getAllUsers(req, res) {
    User.find()
      .then((Users) => res.json(Users))
      .catch((err) => res.status(500).json(err));
  },
  // Get single User
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.UserId })
      .select('-__v')
      .then((User) =>
        !User
          ? res.status(404).json({ message: 'No User with that ID' })
          : res.json(User)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a User
  createUser(req, res) {
    User.create(req.body)
      .then((User) => res.json(User))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Update a User
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.UserId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((User) =>
        !User
          ? res.status(404).json({ message: 'No User with this id!' })
          : res.json(User)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Delete a User
  removeUser(req, res) {
    User.findOneAndDelete({ _id: req.params.UserId })
      .then((User) =>
        !User
          ? res.status(404).json({ message: 'No User with that ID' })
          : Thought.deleteMany({ _id: { $in: User.Thoughts } })
      )
      .then(() => res.json({ message: 'User and Thoughts deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  // Create a Friend
  createFriend(req, res) {
    User.findOneAndUpdate(
    {_id: req.params.id},
    {$push: {friends: params.friendId}},
    {new:true})
    .populate({path: 'friends'})
      .select('-__v')
      .then((User) =>
        !User
          ? res.status(404).json({ message: 'No User with that ID' })
          : res.json(User)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Delete a Friend
  removeFriend(req, res) {
    User.findOneAndUpdate(
        {_id: req.params.UserId},
        {$pull: {friends:params.friendId}},
        {new: true})
        .populate({path:'friends'})
        .select('-__v')
      .then((User) =>
        !User
          ? res.status(404).json({ message: 'No User with that ID' })
          : res.json(User)
      )
      .then(() => res.json({ message: 'Friend deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
};
