const express = require("express")
const router = express.Router()

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
]

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages })
})

router.get("/new", function (req, res, next) {
  res.render("form", { title: "Send a message" })
})

router.post("/new", function (req, res, next) {
  console.log()
  messages.push({
    text: req.body.MessageText,
    user: req.body.Sender,
    added: new Date(),
  })
  res.redirect("/")
})

module.exports = router

// Work from point 6 from TOP

module.exports = router
