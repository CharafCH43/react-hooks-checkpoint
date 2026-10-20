function MovieCard({ movie }) {
  return (
    <article className="movie-card">
      <img className="movie-poster" src={movie.posterURL} alt={movie.title} />

      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p className="movie-rating">⭐ {movie.rating}/10</p>
        <p>{movie.description}</p>
      </div>
    </article>
  );
}

export default MovieCard;
