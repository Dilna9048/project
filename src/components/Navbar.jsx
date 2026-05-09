import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">🎬 Theatre</Link>
      <div>
        
        
       
        <Link className="btn btn-light mx-2" to="/login">Login</Link>
        <Link className="btn btn-warning" to="/my-bookings">My Bookings</Link>
      </div>
    </nav>
  );
};

export default Navbar;