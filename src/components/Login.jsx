import React from "react";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      setUser(data);      
    } catch {
      setError(true);
    }
    setLoading(false);
  };

  return (
    <div>
      <span>{user.name} </span>
      <form>
        <label>
          Email:
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </label>
        <button disabled={!email || !password} onClick={handleClick}>
          {loading ? "Please wait" : "Login"}
        </button>
        <div
          className="error"
          style={{ visibility: error ? "visible" : "hidden" }}
        >
          Oops, something went wrong
        </div>
      </form>
    </div>
  );
};

export default Login;
