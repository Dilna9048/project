import MovieCard from "../components/MovieCard";

const movies = [
  
  { id: 1,title: "Drishyam", price: 200 , image: "/images/Drishyam.jpg"},
  { id: 2,title: "Kasaba", price: 180 , image: "/images/Kasaba.jpg"},
  { id: 3,title: "Lili", price: 140 , image: "/images/Lili.jpg"},
  { id: 4,title: "Love", price: 250 , image: "/images/Love.jpg"},
  {id: 5,title: "Ponman",price:230, image: "/images/Ponman.jpg"},
  {id: 6, title:"Thamaasha",price:220,image: "/images/Thamaasha.jpg"}
  
  
];

const Home = () => {
  return (
    <div className="container mt-4">
      <h2>Movies</h2>
      <div className="row">
        {movies.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </div>
    </div>
  );
};

export default Home;