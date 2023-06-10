const express = require("express")
const router = express.Router()

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("here a new message will be created")
})

module.exports = router
