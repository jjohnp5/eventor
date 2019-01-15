const router = require("express").Router();
const eventRoutes = require('./event')
const guestRoutes = require('./guest')
const menuRoutes = require('./menu');


router.use("/api/event", eventRoutes)
router.use('/api/guest', guestRoutes)
router.use('/api/menu', menuRoutes)

module.exports = router;