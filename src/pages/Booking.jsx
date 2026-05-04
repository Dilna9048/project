import { useParams } from "react-router-dom";
import { useState } from "react";

const Booking = () => {
  const { title, price } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [booked, setBooked] = useState(false);

  const seats = Array.from({ length: 30 }, (_, i) => i + 1);

  const toggleSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handleBooking = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat 😄");
      return;
    }

    const bookingData = {
      movie: title,
      seats: selectedSeats,
      total: selectedSeats.length * Number(price),
    };

    // ✅ Save to localStorage
    localStorage.setItem("booking", JSON.stringify(bookingData));

    setBooked(true);
    setSelectedSeats([]); // reset seats
  };

  return (
    <div className="container text-center">
      <h2>{title}</h2>
      <h4>₹{price} per seat</h4>

      <div className="screen">SCREEN</div>

      <div className="seat-container">
        {seats.map((seat) => (
          <button
            key={seat}
            className={`seat-btn ${
              selectedSeats.includes(seat) ? "btn-success" : "btn-secondary"
            }`}
            onClick={() => toggleSeat(seat)}
          >
            {seat}
          </button>
        ))}
      </div>

      <h4 className="mt-3">
        Total: ₹{selectedSeats.length * price}
      </h4>

      <button className="book-btn mt-3" onClick={handleBooking}>
        Confirm Booking
      </button>

      {booked && (
        <div className="mt-3 success-box">
          <h5>🎉 Booking Successful!</h5>
          <p>{title} booked successfully</p>
        </div>
      )}
    </div>
  );
};

export default Booking;