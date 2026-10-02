import React,{useState} from "react";
import MovieCard from "../components/Card";

const Watchlist = () => {

    const [watchlist, setWatchlist] = useState(
  JSON.parse(localStorage.getItem("watchlist")) || []
);

const removeMovie = (id) => {
  const updatedList = watchlist.filter(
    (movie) => movie.show.id !== id
  );

  setWatchlist(updatedList);

  localStorage.setItem(
    "watchlist",
    JSON.stringify(updatedList)
  );
};


    return (
        <div>
            <h1>
                Watchlist Page
            </h1>

<div className="movie-container">
    {watchlist.map((movie) => (
      <MovieCard
        key={movie.show.id}
        movie={movie}
        onRemove={removeMovie}
      />
    ))}
  </div>

        </div>
    )
}

export default Watchlist;