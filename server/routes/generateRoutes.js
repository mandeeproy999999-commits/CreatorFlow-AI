const router = require("express").Router();

const {
    generateContent
} = require("../controllers/generateController");

router.post("/", generateContent);

module.exports = router;