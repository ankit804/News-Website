import "./Loading.css";

function Loading({ text = "Loading news…" }) {
    return (
        <div className="loader" role="status" aria-live="polite">
            <span className="spinner" aria-hidden="true" />
            <span className="loader-text">{text}</span>
        </div>
    );
}

export default Loading;