const router = require("express").Router();
const menuController = require("../controllers/menu");

router.route("/")
    .get(menuController.findAll)
    .post(menuController.create)

router.route("/:id")
    .get(menuController.findById)
    .post(menuController.update)
    .delete(menuController.remove)

module.exports = router;