import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div className="col-md-4 d-flex justify-content-center">
      <div className="card movie-card">
        <img src={movie.image} className="movie-img" />

        <div className="card-body text-center">
          <h5>{movie.title}</h5>
          <p>₹{movie.price}</p>

          <button
            className="book-btn"
            onClick={() =>
              navigate(`/booking/${movie.title}/${movie.price}`)
            }
          >
            Book Now 🎟️
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;