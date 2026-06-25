const generateYoutubeContent = require("../services/geminiService");
const History=require("../models/History");
const generateContent = async (req, res) => {

    try {

        const data = await generateYoutubeContent(req.body);

            await History.create({

            topic:req.body.topic,

            audience:req.body.audience,

            tone:req.body.tone,

            response:data

        });

        res.json(data);


    }

    catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

}

module.exports = {
    generateContent
};