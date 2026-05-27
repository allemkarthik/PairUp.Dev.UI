import { Outlet } from "react-router";
import NavBar from "./NavBar";
import axios from "axios";
import { BASE_URL } from "../utils/data";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import { useEffect } from "react";
const Body = () => {
  const dispatch = useDispatch();

//   api for profile view and did not logout after every refresh unless logout
  const fetchUser = async () => {
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    } catch (err) {
      console.log(err);
    }
  };

//   useeffect will immediately called after component render 

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};
export default Body;
