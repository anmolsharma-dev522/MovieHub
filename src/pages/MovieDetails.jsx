import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../services/movieApi";

function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getMovieDetails(id)
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong!");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>{movie.name}</h1>

      {movie.image && (
        <img
          src={movie.image.original}
          alt={movie.name}
          height={'400px'}
          style={{margin: '40px auto' , display:"flex",flexDirection:"column",alignItems:'center',gap:'25px'}}
        />
      )}

      <p>⭐ {movie.rating.average || "N/A"}</p>

      <p>{movie.genres.join(" • ")}</p>

      <div
        dangerouslySetInnerHTML={{ __html: movie.summary }}
      />
    </div>
  );
}

export default MovieDetails;