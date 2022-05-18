import React from "react";
import { useState } from "react";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
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
        <button disabled={!email || !password}>Login</button>
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
