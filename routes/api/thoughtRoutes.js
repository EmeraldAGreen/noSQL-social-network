const router = require('express').Router();
const {
  getAllThoughts,
  getSingleThought,
  createThought,
  updateThought,
  removeThought,
  createReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/')
.get(getAllThoughts)
.post(createThought)

router.route('/:thoughtId')
.get(getSingleThought)
.put(updateThought)
.delete(removeThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
  .post(createReaction)

  // /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

module.exports = router;