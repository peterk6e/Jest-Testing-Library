import React from "react";

const Login = () => {
  return (
    <div>
      <form>
        <label>
          Email:
          <input type="email" placeholder="email" />
        </label>
        <label>
          Password:
          <input type="password" placeholder="password"/>
        </label>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
