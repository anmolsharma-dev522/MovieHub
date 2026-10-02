import React,{useState,useEffect} from "react";
import { searchMovies } from "../services/movieApi";
import MovieCard from "../components/Card";

const Search = () => {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');

  

    const handleSearch = () => {
        if (!query.trim()) return ;

        setLoading(true);
        setError('');

        searchMovies(query)
        .then((data)=> {
            setMovies(data);
            setLoading(false);
        
         if (data.length === 0) {
        setError("Movie not found !");
      }
      })
        .catch((err) => {
            setError("Something went wrong!");
            setLoading(false);
        })
    };

    return (
        <div>
            <h1>
                Search Movies
            </h1>
            <div className='search-box'>
            <input 
                    type="text"
                   value={query}
                   onChange={(e) => setQuery(e.target.value)}
                   onKeyDown={(e) => {
                   if (e.key === "Enter") {
                    handleSearch();
                    }
                    }}
                   placeholder="Search for a movie..." />

            <button onClick={handleSearch}>Search</button>
            
            </div>

            {loading && <p className="message">Loading...</p>}

            {error && <p className="message">{error}</p>}

             <div className="movie-container">

        {movies.map((movie) => (
          <MovieCard
            key={movie.show.id}
            movie={movie}
          />))}
          </div>
            
        </div>
    )
}

export default Search;