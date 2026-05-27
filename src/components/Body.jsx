import { Outlet, useNavigate } from "react-router";
import NavBar from "./NavBar";
import axios from "axios";
import { BASE_URL } from "../utils/data";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/userSlice";
import { useEffect } from "react";
const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);

  //   api for profile view and did not logout after every refresh unless logout
  const fetchUser = async () => {
    // make api call only when logout not to make api call again again (check if user is present in redux store)
    if (userData) return;
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    } catch (err) {
      // if login failed navigate again to login page
      if (err.status == 401) {
        navigate("/login");
      }
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
