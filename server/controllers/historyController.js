const History = require("../models/History");

// Get all history
const getHistory = async (req, res) => {
    try {
        const history = await History.find()
            .sort({ createdAt: -1 });

        res.status(200).json(history);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }
};

// Get single history
const getHistoryById = async (req, res) => {

    try {

        const history = await History.findById(req.params.id);

        if (!history) {
            return res.status(404).json({
                message: "History not found"
            });
        }

        res.status(200).json(history);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

// Delete history
const deleteHistory = async (req, res) => {

    try {

        await History.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Deleted Successfully"
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

module.exports = {
    getHistory,
    getHistoryById,
    deleteHistory
};