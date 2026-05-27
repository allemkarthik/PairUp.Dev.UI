import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/userSlice";
import { useNavigate } from "react-router";
import { BASE_URL } from "../utils/data";

const Login = () => {
  const [emailID, setEmailID] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]=useState("")
  const userData=useSelector((store)=>store.user)
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if(userData){
    navigate("/")
  };

  // api to handle login function
  const handleLogin = async () => {

    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailID,
          password,
        },
        { withCredentials: true },
      );

      // user details added in redux store
      dispatch(addUser(res.data));

      // after login sucessfull we will navigate to feed page
      return navigate("/");
    } catch (err) {
      setError(err?.response?.data || "something went wrong");
      
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
          <p className="text-red-600">{error}</p>
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
