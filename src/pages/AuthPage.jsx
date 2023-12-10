import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./../firebase/config";

const AuthPage = ({ setIsAuth }) => {
  // Sign In Function
  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.user.refreshToken);
        setIsAuth(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="auth">
        <h1>Chat Room</h1>
        <p>Sign In to Continue</p>
        <button onClick={handleClick}>
          <img src="/g-logo.png" />
          <span>Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
