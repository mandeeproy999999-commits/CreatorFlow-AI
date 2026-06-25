import { useState, useEffect } from "react";

import api from "./services/api";

import GenerateForm from "./components/GenerateForm";
import OutputCard from "./components/OutputCard";
import HistorySidebar from "./components/HistorySidebar";

import "./App.css";

function App() {

    const [generatedContent, setGeneratedContent] = useState(null);

    const [history, setHistory] = useState([]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {

        async function loadHistory() {

            try {

                const res = await api.get("/history");

                setHistory(res.data);

            } catch (err) {

                console.log(err);

            }

        }

        loadHistory();

    }, []);

    return (

        <div className="app">

            <header>

                <h1>🚀 CreatorFlow AI</h1>

                <p>AI Powered YouTube Content Studio</p>

            </header>

            <main>

                <HistorySidebar
                    history={history}
                />

                <div className="content">

                    <GenerateForm
                        setGeneratedContent={setGeneratedContent}
                        setHistory={setHistory}
                        setLoading={setLoading}
                    />

                    <OutputCard
                        generatedContent={generatedContent}
                        loading={loading}
                    />

                </div>

            </main>

        </div>

    );

}

export default App;