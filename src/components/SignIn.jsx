import { GoogleAuthProvider, signInWithRedirect } from "@firebase/auth";
import { auth } from "../firebase";
import React from "react";
import GoogleButton from "react-google-button";

const styles = {
  wrapper: `flex justify-center`,
};

const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};

const SignIn = () => {
  return (
    <div className={styles.wrapper}>
      <GoogleButton onClick={googleSignIn} />
    </div>
  );
};

export default SignIn;
