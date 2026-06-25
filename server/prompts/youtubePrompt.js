function buildPrompt(topic, audience, tone) {

return `

You are an expert YouTube Content Strategist.

Your job is to generate professional YouTube content.

Topic:
${topic}

Audience:
${audience}

Tone:
${tone}

Return ONLY valid JSON.

Structure:

{
"title":"",
"hook":"",
"script":"",
"description":"",
"thumbnailPrompt":"",
"tags":[],
"seoKeywords":[],
"alternativeIdeas":[]
}

Rules:

1. Create a highly clickable SEO optimized title.

2. Create an engaging hook within first 15 seconds.

3. Generate a script of around 2-3 minutes.

4. Description should be SEO optimized.

5. Thumbnail prompt should be highly detailed for AI image generation.

6. Give exactly 10 tags.

7. Give exactly 10 SEO keywords.

8. Give exactly 5 alternative YouTube video ideas.

9. No markdown.

10. No explanation.

11. Return ONLY JSON.

`;

}

module.exports = buildPrompt;