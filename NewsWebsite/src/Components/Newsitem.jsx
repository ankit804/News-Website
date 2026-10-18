
import image from "../assets/image.png";
import "./Newsitem.css";

function NewsItem({ src, title, description, url }) {
    return (
        <article className="news-card">
            <a className="news-card-image" href={url || undefined} target={url ? "_blank" : undefined} rel={url ? "noopener noreferrer" : undefined} aria-label={title}>
                <img src={src || image} alt={title || "News article"} loading="lazy" /> 
                <span className="image-overlay"></span>
                <span className="read-badge">Read story ↗</span>
            </a>

            <div className="news-card-body">
                <span className="news-label">LATEST NEWS</span>

                <h2 className="news-card-title">
                    {title || "Untitled article"}
                </h2>

                <p className="news-card-description">
                    {description || "Read the latest updates in this story."}
                </p>

                {url && (
                    <a className="news-card-link" href={url} target="_blank" rel="noopener noreferrer"> Read full story <span>→</span></a>
                )}
            </div>
        </article>
    );
}

export default NewsItem;
