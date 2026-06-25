import HistoryItem from "./HistoryItem";

function HistorySidebar({ history }) {

    return (

        <aside className="history-sidebar">

            <h2>Recent History</h2>

            {

                history.length === 0 ?

                <p>No history available.</p>

                :

                history.map((item)=>(

                    <HistoryItem

                        key={item._id}

                        item={item}

                    />

                ))

            }

        </aside>

    );

}

export default HistorySidebar;