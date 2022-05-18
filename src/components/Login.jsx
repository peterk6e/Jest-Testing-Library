import React from "react";

const Login = () => {
  return (
    <div>
      <form>
        <label>
          Email:
          <input type="text" />
        </label>
        <label>
          Password:
          <input type="password" />
        </label>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
