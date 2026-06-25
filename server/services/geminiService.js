const { GoogleGenAI } = require("@google/genai");

const buildPrompt = require("../prompts/youtubePrompt");

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

async function generateYoutubeContent(data) {

    const prompt = buildPrompt(
        data.topic,
        data.audience,
        data.tone
    );

    const response = await ai.models.generateContent({

        model: "gemini-2.5-flash",

        contents: prompt

    });

    let text = response.text;

    text = text
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

    return JSON.parse(text);

}

module.exports = generateYoutubeContent;