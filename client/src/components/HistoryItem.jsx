function HistoryItem({ item }) {

    return (

        <div className="history-card">

            <h4>{item.topic}</h4>

            <p>{item.audience}</p>

            <small>

                {new Date(item.createdAt).toLocaleDateString()}

            </small>

        </div>

    );

}

export default HistoryItem;