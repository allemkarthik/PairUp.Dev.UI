import { Outlet, useNavigate } from "react-router";
import NavBar from "./NavBar";
import axios from "axios";
import { BASE_URL } from "../utils/data";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/userSlice";
import { useEffect } from "react";
import Footer from "./Footer";

// console.log("addUser Action:", addUser);

const Body = () => {
  // console.log("Body Rendered");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);

  // api for profile view and did not logout after every refresh unless logout
  const fetchUser = async () => {
    // make api call only when logout not to make api call again again (check if user is present in redux store)
    if (userData) {
      console.log("User already exists");
      return;
    }

    try {
      // console.log("Calling /profile/view");
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });

      dispatch(addUser(res.data));
      // console.log("Dispatching user:", res.data);
      // const action = addUser(res.data);
      // dispatch(action);
    } catch (err) {
      // console.log("PROFILE ERROR:", err.response);
      // if login failed navigate again to login page
      if (err.response?.status == 401) {
        navigate("/login");
        return;
      }
      console.log(err);
    }
  };

  //   useeffect will immediately called after component render
  useEffect(() => {
    // console.log("Body useEffect Running");
    fetchUser();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 pb-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default Body;
