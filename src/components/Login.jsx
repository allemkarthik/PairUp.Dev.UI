import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [emailID, setEmailID] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/login",
        {
          emailID,
          password,
        },
        { withCredentials: true },
      );
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="flex justify-center my-20">
      <div className="card card-border bg-base-100 w-96">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email Id:</legend>
              <input
                type="text"
                value={emailID}
                className="input"
                onChange={(e) => setEmailID(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="text"
                value={password}
                className="input"
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
