import { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import "./App.css";

const initialMovies = [
  {
    id: 1,
    title: "Inception",
    description: "Un voleur entre dans les rêves pour voler des secrets.",
    posterURL:
      "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    rating: 8.8,
  },
  {
    id: 2,
    title: "Interstellar",
    description: "Un voyage spatial pour sauver l'humanité.",
    posterURL:
      "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    rating: 8.7,
  },
  {
    id: 3,
    title: "The Dark Knight",
    description: "Batman affronte le Joker à Gotham City.",
    posterURL:
      "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    rating: 9.0,
  },
  {
    id: 4,
    title: "Avatar",
    description: "Une aventure sur la planète Pandora.",
    posterURL:
      "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
    rating: 7.9,
  },
];

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("0");

  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "7",
  });

  const filteredMovies = movies.filter((movie) => {
    const matchesTitle = movie.title
      .toLowerCase()
      .includes(titleFilter.trim().toLowerCase());

    const matchesRating = movie.rating >= Number(ratingFilter);

    return matchesTitle && matchesRating;
  });

  function handleInputChange(event) {
    const { name, value } = event.target;

    setNewMovie((previousMovie) => ({
      ...previousMovie,
      [name]: value,
    }));
  }

  function handleAddMovie(event) {
    event.preventDefault();

    const movie = {
      ...newMovie,
      id: Date.now(),
      rating: Number(newMovie.rating),
    };

    setMovies((previousMovies) => [...previousMovies, movie]);

    setNewMovie({
      title: "",
      description: "",
      posterURL: "",
      rating: "7",
    });
  }

  return (
    <main className="app-container">
      <header className="app-header">
        <p className="eyebrow">YOUR PERSONAL COLLECTION</p>
        <h1>
          Movie<span>Hub</span>
        </h1>
        <p>Discover and organize your favorite movies.</p>
      </header>

      <section className="add-section">
        <h2>Add a movie</h2>

        <form className="movie-form" onSubmit={handleAddMovie}>
          <input
            name="title"
            type="text"
            placeholder="Movie title"
            value={newMovie.title}
            onChange={handleInputChange}
            required
          />

          <textarea
            name="description"
            placeholder="Movie description"
            value={newMovie.description}
            onChange={handleInputChange}
            required
          />

          <input
            name="posterURL"
            type="url"
            placeholder="Poster image URL (https://...)"
            value={newMovie.posterURL}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="new-rating">Rating: {newMovie.rating}/10</label>

          <input
            id="new-rating"
            name="rating"
            type="number"
            min="0"
            max="10"
            step="0.1"
            value={newMovie.rating}
            onChange={handleInputChange}
            required
          />

          <button type="submit">+ Add Movie</button>
        </form>
      </section>

      <section className="movies-section">
        <div className="section-heading">
          <div>
            <h2>My Movies</h2>
            <p>Find your next favorite movie.</p>
          </div>
          <span className="movie-count">{filteredMovies.length} movies</span>
        </div>

        <Filter
          titleFilter={titleFilter}
          setTitleFilter={setTitleFilter}
          ratingFilter={ratingFilter}
          setRatingFilter={setRatingFilter}
        />

        <MovieList movies={filteredMovies} />
      </section>
    </main>
  );
}

export default App;
