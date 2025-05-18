import MovieCard from "./components/MovieCard";
import MovieList from "./components/MovieList";
import "./App.css";
import AddMovie from "./components/AddMovie";
import { useEffect, useState } from "react";
import Filter from "./components/Filter";

export default function App() {
  // retieving list of movies from MovieList
  const getInitialValues = () => {
    const saved = localStorage.getItem("movies");
    return saved ? JSON.parse(saved) : MovieList;
  };
  // setting up state for movies
  const [movies, setMovies] = useState(getInitialValues);
  // updating movies array to local storage
  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  // setting up state for new movies added by user
  const [newMovies, setNewMovies] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });
  // a function that adds name attribute and its value to the new movies added
  const handleInputChange = (e) => {
    setNewMovies({ ...newMovies, [e.target.name]: e.target.value });
  };
  // a function that adds new movie to the existing list of movies
  const addMovie = () => {
    if (
      !newMovies.title ||
      !newMovies.description ||
      !newMovies.posterURL ||
      !newMovies.rating
    ) {
      alert("Please fill all fields");
    } else {
      const movieToAdd = {
        ...newMovies,
        id: Date.now(),
        rating: Number(newMovies.rating),
      };
      setMovies([movieToAdd, ...movies]);
      setNewMovies({
        title: "",
        description: "",
        posterURL: "",
        rating: 0,
      });
    }
  };
  // a function that resets to the default movie list
  const resetMovies = () => {
    localStorage.removeItem("movies");
    setMovies(MovieList);
  };

  // filter by rating and title
  const [filterRating, settFilterRating] = useState(0);
  const [filterTitle, settFilterTitle] = useState("");

  // filter conditions
  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRating
    );
  });
  // mapping out all attributes of each movie
  const eachMovie = filteredMovies.map((movie) => {
    return (
      <MovieCard
        key={movie.id}
        image={movie.posterURL}
        title={movie.title}
        description={movie.description}
        rating={movie.rating}
      />
    );
  });
  return (
    <main>
      <h1>
        Movie<span>World</span>
      </h1>
      <Filter
        onRatingChange={(val) => settFilterRating(Number(val))}
        onTitleChange={settFilterTitle}
      />
      <AddMovie
        title={newMovies.title}
        description={newMovies.description}
        posterURL={newMovies.posterURL}
        rating={newMovies.rating}
        handleInputChange={handleInputChange}
        addMovie={addMovie}
        resetMovies={resetMovies}
      />
      <div className="movieCards">{eachMovie}</div>
    </main>
  );
}
