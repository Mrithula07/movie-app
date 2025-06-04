import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const MovieDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
  const API_HOST = import.meta.env.VITE_RAPIDAPI_HOST;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://imdb236.p.rapidapi.com/api/imdb/${id}`,
          {
            headers: {
              "x-rapidapi-key": API_KEY,
              "x-rapidapi-host": API_HOST,
            },
          }
        );
        console.log("Movie detail:", response.data);
        setMovie(response.data);
      } catch (err) {
        setError("Failed to load movie details");
        console.error(err);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;
  if (!movie)
    return <p className="text-light-200 text-center mt-10">Loading...</p>;

  return (
    <section className="movie-details bg-dark-100 text-light-100 py-12 px-5 sm:px-10 max-w-4xl mx-auto rounded-xl shadow-md">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-light-200 hover:text-white transition-colors"
      >
        ⬅ Back
      </button>

      <div className="flex flex-col sm:flex-row gap-6">
        <img
          src={movie.primaryImage || "./No-Poster.png"}
          alt={movie.primaryTitle}
          className="w-full sm:w-[250px] h-auto rounded-lg shadow-lg"
        />

        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-white">
            {movie.primaryTitle}
          </h2>

          <section className="text-light-200 font-semibold">
            <p>
              <span>Description:</span>{" "}
              {movie.description || "No description available."}
            </p>

            <p>
              <span>Genres:</span> {movie.genres?.join(", ") || "N/A"}
            </p>

            <p>
              <span>Release Date:</span> {movie.releaseDate || "N/A"}
            </p>

            <p>
              <span>Rating:</span> {movie.averageRating || "N/A"} (
              {movie.numVotes || 0} votes)
            </p>

            <p>
              <span>Runtime:</span> {movie.runtimeMinutes || "N/A"} minutes
            </p>

            <p>
              <span>Directors:</span>{" "}
              {movie.directors?.map((d) => d.fullName).join(", ") || "N/A"}
            </p>

            <p>
              <span>Cast:</span>{" "}
              {movie.cast
                ?.slice(0, 5)
                .map((c) => c.fullName)
                .join(", ") || "N/A"}{" "}
              ...
            </p>

            {/* Watch Trailer Button (if available) */}
            {movie.url && (
              <a
                href={movie.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
              >
                Watch Trailer
              </a>
            )}
          </section>
        </div>
      </div>
    </section>
  );
};

export default MovieDetail;
