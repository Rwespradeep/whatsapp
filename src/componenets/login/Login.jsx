import React from "react";
import "./Login.scss";
import { provider, auth, signInWithPopup } from "../../firebase";

const Login = () => {
  const signIn = () => {
    signInWithPopup(auth, provider);
  };
  return (
    <div className="container">
      <img
        className="whatsappLogo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png"
        alt=""
      />
      {/* <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} /> */}
      <button onClick={signIn}>Login with Google</button>
    </div>
  );
};

export default Login;
