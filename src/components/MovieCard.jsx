import { useNavigate } from "react-router-dom";

const MovieCard = ({
  index,
  movie: {
    id, // Ensure the movie object has an `id` or `movie_id`
    primaryTitle,
    averageRating,
    primaryImage,
    releaseDate,
    spokenLanguages,
  },
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (id) navigate(`/movie/${id}`);
  };

  return (
    <div className="movie-card cursor-pointer" onClick={handleClick}>
      <img
        src={primaryImage ? primaryImage : "./No-Poster.png"}
        alt={primaryTitle}
      />
      <div className="mt-4">
        <h3>{primaryTitle}</h3>
        <div className="content">
          <div className="rating">
            <img src="./Rating.svg" alt="Star Icon" />
            <p>{averageRating ? averageRating : "N/A"}</p>
          </div>
          <span>•</span>
          <p className="lang">{spokenLanguages ? spokenLanguages[0] : "N/A"}</p>
          <span>•</span>
          <p className="year">
            {releaseDate ? releaseDate.split("-")[0] : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
