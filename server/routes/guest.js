const router = require("express").Router();
const guestController = require("../controllers/guest");

router.route("/")
    .get(guestController.findAll)
    .post(guestController.create)

router.route("/:id")
    .get(guestController.findById)
    .post(guestController.update)
    .delete(guestController.remove)

router.route("/addEvent/:id")
    .post(guestController.addEvent)

module.exports = router;