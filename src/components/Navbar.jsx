import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <h2 style={{cursor:'pointer'}} className="logo">🎥 MovieHub</h2>

            <div>
                <Link to="/">Home</Link>
                <Link to="/search">Search</Link>
                <Link to="/watchlist">Watchlist</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    )
}

export default Navbar;