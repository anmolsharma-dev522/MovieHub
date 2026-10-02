import React,{useEffect,useState} from "react";
import MovieCard from "../components/Card";
import { getPosts } from "../services/postApi";
import { getMovies } from "../services/movieApi";
const Home = () => {

  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState('');

  useEffect (() => {
            getMovies().then((data) => {
              console.log('API Data : ', data)
              setMovie(data);
              setLoading(false);
            })
            .catch((err) => {
              console.log('API Error : ', err);
              setError("Something went wrong!");
              setLoading(false);
            });
  },[])


   

  return (
   
    <div>
      <h1>MovieHub</h1>
      <h2>Popular Movies</h2>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

   <div className="movie-container">
  {movie.map((movie) => (
    <MovieCard
      key={movie.show.id}
      movie={movie}
    />
  ))}
</div>
</div>
  );
}


export default Home;