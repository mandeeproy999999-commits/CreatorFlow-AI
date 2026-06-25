import { useState } from "react";
import api from "../services/api";

function GenerateForm({
    setGeneratedContent,
    setHistory,
    setLoading
}) {

    const [topic, setTopic] = useState("");

    const [audience, setAudience] = useState("General");

    const [tone, setTone] = useState("Educational");

    const [category, setCategory] = useState("History");

    async function handleGenerate(e) {

        e.preventDefault();

        if (!topic.trim()) {
            alert("Please enter a topic.");
            return;
        }

        try {

            setLoading(true);

            const response = await api.post("/generate", {

                topic,
                audience,
                tone,
                category

            });

            setGeneratedContent(response.data);

            const history = await api.get("/history");

            setHistory(history.data);

            setTopic("");

        }

        catch (err) {

            console.log(err);

            alert("Generation Failed");

        }

        finally {

            setLoading(false);

        }

    }

    return (

        <form
            className="generate-form"
            onSubmit={handleGenerate}
        >

            <input

                type="text"

                placeholder="Enter YouTube Topic"

                value={topic}

                onChange={(e)=>setTopic(e.target.value)}

            />

            <select

                value={audience}

                onChange={(e)=>setAudience(e.target.value)}

            >

                <option>General</option>

                <option>Students</option>

                <option>Professionals</option>

                <option>Kids</option>

            </select>

            <select

                value={tone}

                onChange={(e)=>setTone(e.target.value)}

            >

                <option>Educational</option>

                <option>Storytelling</option>

                <option>Funny</option>

                <option>Motivational</option>

            </select>

            <select

                value={category}

                onChange={(e)=>setCategory(e.target.value)}

            >

                <option>History</option>

                <option>Technology</option>

                <option>Finance</option>

                <option>Science</option>

                <option>Education</option>

            </select>

            <button>

                Generate Content

            </button>

        </form>

    );

}

export default GenerateForm;