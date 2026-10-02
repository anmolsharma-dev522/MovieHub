import React,{useState} from "react";
import { Link } from "react-router-dom";

const saveMovie = (movie) => {
  const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

  const alreadySaved = watchlist.some(
    (item) => item.show.id === movie.show.id
  );

  if (!alreadySaved) {
    watchlist.push(movie);

    localStorage.setItem(
      "watchlist",
      JSON.stringify(watchlist)
    );

    alert("Added to Watchlist!");
  } else {
    alert("Movie already in Watchlist!");
  }
};

function MovieCard({movie,onRemove}) {

const [saved, setSaved] = useState(() => {
  const watchlist =
    JSON.parse(localStorage.getItem("watchlist")) || [];

  return watchlist.some(
    (item) => item.show.id === movie.show.id
  );
});

    const show = movie.show;
    return (
      <Link to={`/movie/${show.id}`} className="movie-link">
        <div className="movie-card">
            {show.image && (
        <img
          src={show.image.medium}
          alt={show.name}
        />
      )}

      <h3>{show.name}</h3>

<div className="card-bottom">

  <p>⭐ {show.rating.average || "N/A"}</p>

  <button className="watchlist-btn"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

    if (onRemove) {
      onRemove(movie.show.id);
      setSaved(false);
    } else {
      saveMovie(movie);
      setSaved(true);
    }
  }}
  title={onRemove ? "Remove from Watchlist" : "Add to Watchlist"}
  >
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill={saved ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M6 4.5A2.5 2.5 0 0 1 8.5 2h7A2.5 2.5 0 0 1 18 4.5V21l-6-3.5L6 21V4.5Z" />
    </svg>
  </button>
</div>
</div>

       
        </Link>
    )
}

export default MovieCard;