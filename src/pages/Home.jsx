import { useState } from "react";
import MovieCard from "../components/MovieCard";

const movies = [
  { id: 1, title: "Ponman", price: 150, image: "/images/Ponman.jpg" },
  { id: 2, title: "Drishyam", price: 200, image: "/images/Drishyam.jpg" },
  { id: 3, title: "Kasaba", price: 180, image: "/images/Kasaba.jpg" },
  { id: 4, title: "Lili", price: 140, image: "/images/Lili.jpg" },
  { id: 5, title: "Love", price: 250, image: "/images/Love.jpg" },
  { id: 6, title: "Thamaasha", price: 100, image: "/images/Thamaasha.jpg" }
];

const Home = () => {
  const [search, setSearch] = useState("");

  //  Filter movies
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">

      {/*  Search Box */}
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search movie..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h2 className="text-center mb-4">🎬 Movies</h2>

      <div className="row">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((m) => (
            <MovieCard key={m.id} movie={m} />
          ))
        ) : (
          <h4 className="text-center">No movies found </h4>
        )}
      </div>
    </div>
  );
};

export default Home;