import CopyButton from "./CopyButton";

function SectionCard({ title, content }) {

    return (

        <div className="section-card">

            <div className="section-header">

                <h3>{title}</h3>

                <CopyButton text={content} />

            </div>

            <p>{content}</p>

        </div>

    );

}

export default SectionCard;