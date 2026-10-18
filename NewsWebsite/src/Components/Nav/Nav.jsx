import "./Nav.css"
import { useState } from "react";

function Navbar({ setCategory }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [search, setSearch] = useState("");


    const categories = [
        { name: "Home", value: "general" },
        { name: "Business", value: "business" },
        { name: "Entertainment", value: "entertainment" },
        { name: "Health", value: "health" },
        { name: "Science", value: "science" },
        { name: "Sports", value: "sports" },
        { name: "Technology", value: "technology" },
    ];


    return (
        <header className="navbar">
            <a href="/" className="nav-logo">
                <span className="logo-icon">N</span>

                <span className="logo-text">
                    <strong>ComeOn<span>News</span></strong>
                    <small>Real News. Real People. Real Nepal.</small>
                </span>
            </a>

            <button
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
                aria-expanded={menuOpen}
            >
                {menuOpen ? "✕" : "☰"}
            </button>

            <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
                {categories.map((category) => (
                    <a
                        key={category.value}
                        href="#"
                        className="nav-link"
                        onClick={(e) => {
                            e.preventDefault();
                            setMenuOpen(false);
                            setCategory(category.value);
                        }}

                    >
                        {category.name}
                    </a>
                ))}
            </nav>

            <form
                className="nav-search"
                onSubmit={(e) => {
                    e.preventDefault();
                    if (search.trim()) {
                        window.location.href =
                            `/search?q=${encodeURIComponent(search.trim())}`;
                    }
                }}
            >
                <input
                    type="search"
                    placeholder="Search news..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    aria-label="Search news"
                />
                <button type="submit" aria-label="Submit search">
                    ⌕
                </button>
            </form>
        </header>
    );
}

export default Navbar;
