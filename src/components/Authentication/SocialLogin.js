import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const SocialLogin = () => {
  let errorText;
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (user) {
    navigate(from, { replace: true });
  }
  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    errorText = <p className="text-danger text-center">{error.message}</p>;
  }
  return (
    <div className="w-75 mx-auto ">
      <button
        onClick={() => signInWithGoogle()}
        className="w-100 my-3 btn btn-outline-info"
      >
        SIGN IN WITH GOOGLE
      </button>
      <div> {errorText}</div>
    </div>
  );
};

export default SocialLogin;
