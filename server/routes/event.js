const router = require("express").Router();
const eventController = require("../controllers/event");

router.route("/")
    .get(eventController.findAll)
    .post(eventController.create)

router.route("/:id")
    .get(eventController.findById)
    .put(eventController.update)
    .delete(eventController.remove)

router.route("/addParticipant/:id")
    .post(eventController.addEventParticipant)

router.route("/addMenu/:id")
    .post(eventController.addEventMenu)

router.route("/:id/voteMenu")
    .put(eventController.addEventMenuVote)

module.exports = router;