import SectionCard from "./SectionCard";

function OutputCard({ generatedContent, loading }) {

    if (loading) {

        return (

            <div className="output-card">

                <h2>Generating Content...</h2>

                <p>Please wait while AI creates your content.</p>

            </div>

        );

    }

    if (!generatedContent) {

        return (

            <div className="output-card">

                <h2>No Content Generated Yet</h2>

                <p>
                    Enter a topic and click <b>Generate Content</b>.
                </p>

            </div>

        );

    }

    return (

        <div className="output-card">

            <SectionCard
                title="SEO Optimized Title"
                content={generatedContent.title}
            />

            <SectionCard
                title="Hook"
                content={generatedContent.hook}
            />

            <SectionCard
                title="Script"
                content={generatedContent.script}
            />

            <SectionCard
                title="Description"
                content={generatedContent.description}
            />

            <SectionCard
                title="Thumbnail Prompt"
                content={generatedContent.thumbnailPrompt}
            />

            <div className="section-card">

                <h3>Tags</h3>

                <div className="tags">

                    {generatedContent.tags.map((tag) => (

                        <span
                            className="tag"
                            key={tag}
                        >
                            {tag}
                        </span>

                    ))}

                </div>

            </div>

            <div className="section-card">

                <h3>Alternative Ideas</h3>

                <ul>

                    {generatedContent.alternativeIdeas.map((idea) => (

                        <li key={idea}>
                            {idea}
                        </li>

                    ))}

                </ul>

            </div>

        </div>

    );

}

export default OutputCard;