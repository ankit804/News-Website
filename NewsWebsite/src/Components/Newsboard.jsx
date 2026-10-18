import { useEffect, useState } from "react";
import NewsItem from "./Newsitem";
import "./Newsboard.css"
import Loading from "./Loading/Loading";

function NewsBoard({ category }) {
    const [articles, setArticles] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const controller = new AbortController()

        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {

                const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=52e2b6699617475b98e4e857a18271f0`, {
                    signal: controller.signal
                })
                if (!response.ok) {
                    throw new Error(`Error has occured ${response.status}`)
                }
                const data = await response.json()
                console.log(data.articles)
                setArticles(data.articles)
            } catch (e) {
                if (e.name !== "AbortError") {
                    setError(e.message)
                }
            } finally {
                setLoading(false)
            }
        }

        fetchData()

        return () => {
            controller.abort()
        }
    }, [category])

    if (loading) return <Loading />;
    if (error) return <p>Error: {error}</p>;
    if (articles.length === 0) return <p>No news found.</p>;

    return (<>
        <h1 style={{ textAlign: "center" }}>Latest <span style={{
            backgroundColor: "gray",
            borderRadius: "10px",
            color: "white",
            padding: "0 10px"
        }}>News</span></h1>

        <div className="news-grid">
            {articles.map((article) => (
                <NewsItem
                    key={article.url}
                    src={article.urlToImage}
                    title={article.title}
                    description={article.description}
                    url={article.url}
                />
            ))}
        </div>
    </>)


}

export default NewsBoard;