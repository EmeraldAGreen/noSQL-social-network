const router = require('express').Router();

const {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    removeUser,
    createFriend,
    removeFriend,
} = require ('../../controllers/userController');

// /api/users
router.route('/')
.get(getAllUsers)
.get(getSingleUser)
.post(createUser)
.put(updateUser)
.delete(removeUser);
// *bonus remove user's assoc thoughts on delete

// /api/users/:userId/friends/:friendId
router.route(`/:userId/friends/:friendId`)
.post(createFriend)
.delete(removeFriend);

module.exports = router;
