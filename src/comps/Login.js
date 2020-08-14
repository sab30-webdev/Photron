import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="login-container">
      <h1 className="firegram">Photron</h1>
      <button className="auth-btn" onClick={() => loginWithRedirect()}>
        Login
      </button>
    </div>
  );
};

export default Login;
