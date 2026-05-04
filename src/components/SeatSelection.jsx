import { useState } from "react";

const SeatSelection = ({ price }) => {
  const [seats, setSeats] = useState([]);

  const toggleSeat = (num) => {
    setSeats((prev) =>
      prev.includes(num)
        ? prev.filter((s) => s !== num)
        : [...prev, num]
    );
  };

  return (
    <div>
      <h5>Select Seats</h5>
      {[...Array(20)].map((_, i) => (
        <button
          key={i}
          onClick={() => toggleSeat(i)}
          className={`btn m-1 ${
            seats.includes(i) ? "btn-success" : "btn-outline-secondary"
          }`}
        >
          {i + 1}
        </button>
      ))}
      <h4>Total: ₹{seats.length * price}</h4>
    </div>
  );
};

export default SeatSelection;