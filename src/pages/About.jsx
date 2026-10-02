import React from "react";

const About = () => {
  return (
    <div className="about-page">
      <h1>🎬 About MovieHub</h1>

      <h2>Welcome to MovieHub!</h2>

      <p>
        MovieHub is a simple movie discovery website where you can search
        for movies, explore their details, and save your favorite movies
        to your watchlist.
      </p>

      <h2>Why MovieHub?</h2>

      <p>
        This project was created as a learning project to explore React
        and understand how a real website works with APIs, components,
        routing, and local storage.
      </p>

      <h3>What you can do:</h3>

      <ul>
        <li>Search for movies</li>
        <li>Explore movie details</li>
        <li>Add movies to your watchlist</li>
        <li>Remove movies from your watchlist</li>
      </ul>

      <h3>🎬 Built to learn. Designed to explore.</h3>
    </div>
  );
};

export default About;