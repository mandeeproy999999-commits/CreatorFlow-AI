const router = require("express").Router();

const {
    getHistory,
    getHistoryById,
    deleteHistory
} = require("../controllers/historyController");

router.get("/", getHistory);

router.get("/:id", getHistoryById);

router.delete("/:id", deleteHistory);

module.exports = router;