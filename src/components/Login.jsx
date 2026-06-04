import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/userSlice";
import { useNavigate } from "react-router";
import { BASE_URL } from "../utils/data";

const Login = () => {
  const [emailID, setEmailID] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [error, setError] = useState("");

  const userData = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Redirect if user is already logged in
  useEffect(() => {
    if (userData) {
      navigate("/");
    }
  }, [userData, navigate]);

    

  // Handle login
  const handleLogin = async () => {
    setError("");

    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailID,
          password,
        },
        {
          withCredentials: true,
        },
      );

      // Store user in Redux
      dispatch(addUser(res.data));

      // Navigate after successful login
      navigate("/");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };

  // handle signup
  const handleSignup = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        { firstName, lastName, emailID, password },
        { withCredentials: true },
      );

      dispatch(addUser(res.data.data));

      navigate("/profile");
    } catch (err) {
      console.log("Signup Error:", err.response);
      setError(err?.response?.data || "Something went wrong");
    }
  };

  return (
    <div className="flex justify-center my-20">
      <div className="card card-border bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center text-2xl">
            {isLoginForm ? "Login" : "Sign Up"}
          </h2>

          {!isLoginForm && (
            <>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">First Name</legend>

                <input
                  type="text"
                  value={firstName}
                  className="input input-bordered w-full"
                  placeholder="Enter your first name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Last Name</legend>

                <input
                  type="text"
                  value={lastName}
                  className="input input-bordered w-full"
                  placeholder="Enter your last name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </fieldset>
            </>
          )}

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email ID</legend>

            <input
              type="email"
              value={emailID}
              className="input input-bordered w-full"
              placeholder="Enter your email"
              onChange={(e) => setEmailID(e.target.value)}
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>

            <input
              type="password"
              value={password}
              className="input input-bordered w-full"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>

          {error && <p className="text-red-500 text-center mt-2">{error}</p>}

          <div className="card-actions justify-center mt-4">
            <button
              className="btn btn-primary w-full"
              onClick={isLoginForm ? handleLogin : handleSignup}
            >
              {isLoginForm ? "Login" : "Sign Up"}
            </button>
          </div>

          <p
            className="text-center mt-3 cursor-pointer text-primary"
            onClick={() => setIsLoginForm((value) => !value)}
          >
            {isLoginForm
              ? "New User? Sign Up Here"
              : "Already have an account? Login Here"}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
