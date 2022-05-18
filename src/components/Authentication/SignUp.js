import { React, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import SocialLogin from "./SocialLogin";

const SignUp = () => {
  const location = useLocation();

  const [agree, setAgree] = useState(false);
  const from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating] = useUpdateProfile(auth);

  const handleSignUp = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const pass = e.target.password.value;

    await createUserWithEmailAndPassword(email, pass);
    await updateProfile({ displayName: name });
    console.log("update user profile");
    navigate(from, { replace: true });
  };

  if (loading || updating) {
    return <Loading></Loading>;
  }
  if (user) {
    console.log("user", user);
  }
  if (error) {
    console.log(error.message);
  }

  return (
    <div className=" w-50  container-fluid vh-100 my-5  px-5">
      <div className="border px-5 py-3 rounded">
        <h4 className="text-center mt-2 p-2 text-secondary">SIGN UP</h4>
        <form onSubmit={handleSignUp}>
          <div className="p-3">
            <label htmlFor="name" className="">
              Name
            </label>
            <div className="input-wrapper">
              <input
                type="text"
                name="name"
                id="name"
                className="w-100 p-2 rounded"
              />
            </div>
          </div>
          <div className="p-3">
            <label htmlFor="email" className="">
              Email
            </label>
            <div className="input-wrapper">
              <input
                type="email"
                name="email"
                id="email"
                className="w-100 p-2 rounded"
                required
              />
            </div>
          </div>
          <div className="p-3">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <input
                type="password"
                name="password"
                id="password"
                className="w-100 p-2 rounded"
                required
              />
            </div>
          </div>

          <div>
            <input
              onClick={() => setAgree(!agree)}
              type="checkbox"
              name="terms"
              id="terms"
              className="p-2 ms-3 me-2"
            />
            <label
              htmlFor="terms"
              className={agree ? "text-success" : "text-danger"}
            >
              Accept our terms and conditions?{" "}
            </label>
          </div>
          <div className="p-3 w-100 mx-auto">
            <button
              disabled={!agree}
              type="submit"
              className="w-100 p-2 rounded btn btn-outline-info"
            >
              SIGN UP
            </button>
          </div>
          <p className="text-center mb-3">
            Already have an account?{" "}
            <Link to={"/login"} className="text-decoration-none text-primary">
              Login
            </Link>
          </p>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default SignUp;
