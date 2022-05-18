import React from "react";
import { useState } from "react";

const Login = () => {
  const [error, setError] = useState(false)

    return (
    <div>
      <form>
        <label>
          Email:
          <input type="email" placeholder="email" />
        </label>
        <label>
          Password:
          <input type="password" placeholder="password" />
        </label>
        <button disabled="true">Login</button>
        <div className="error" style={{visibility: error? "visible" : "hidden"}}>Oops, something went wrong</div>
      </form>
    </div>
  );
};

export default Login;
