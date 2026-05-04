import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();   // ✅ add this

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email });

    // ✅ redirect to home
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control my-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;