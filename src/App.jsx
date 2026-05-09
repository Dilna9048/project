import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";

import Booking from "./pages/Booking";
import MyBookings from "./pages/MyBookings";




const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        
         <Route path="/booking/:title/:price" element={<Booking />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        


        

      </Routes>
    </>
  );
};

export default App;