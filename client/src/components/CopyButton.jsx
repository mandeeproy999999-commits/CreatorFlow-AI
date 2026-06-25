function CopyButton({ text }) {

    function handleCopy() {

        navigator.clipboard.writeText(text);

        alert("Copied!");

    }

    return (

        <button
            onClick={handleCopy}
        >

            📋 Copy

        </button>

    );

}

export default CopyButton;