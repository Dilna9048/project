import { useEffect, useState } from "react";

const MyBookings = () => {
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("booking"));
    setBooking(data);
  }, []);

  return (
    <div className="container mt-4">
      <h2>My Bookings</h2>

      {booking ? (
        <div className="card p-3 mt-3">
          <h4>{booking.movie}</h4>
          <p>Seats: {booking.seats.join(", ")}</p>
          <p>Total: ₹{booking.total}</p>

          {/* Clear button */}
          <button
            className="btn btn-danger mt-2"
            onClick={() => {
              localStorage.removeItem("booking");
              setBooking(null);
            }}
          >
            Clear Booking 
          </button>
        </div>
      ) : (
        <p>No bookings yet</p>
      )}
    </div>
  );
};

export default MyBookings;