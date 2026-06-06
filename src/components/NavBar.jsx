import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { BASE_URL } from "../utils/data";
import { removeUser } from "../store/userSlice";

const NavBar = () => {
  // subscribed to store to fetch user details from store and added in navbar
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlelogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      // when logout=> remove user from store
      dispatch(removeUser());
      // and navigate to login page
      return navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* navbar */}
      <div className="navbar bg-base-300 shadow-sm">
        <div className="flex flex-1 items-center gap-3">
  <Link to="/" className="flex items-center gap-2 group">
    <img
      src="/src/assets/logo.png"
      alt="PairUpDev Logo"
      className="h-10 w-10 object-contain transition-transform group-hover:scale-105"
    />

    <span className="text-xl font-bold tracking-wide text-base-content group-hover:text-primary transition-colors">
      PairUpDev
    </span>
  </Link>
</div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
          {user && (
            <div className="dropdown dropdown-end mx-6">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="user photo" src={user.photoUrl} />
                </div>
              </div>
              <p>Welcome, {user.firstName}</p>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link to="/allconnections">Connections</Link>
                </li>
                <li>
                  <Link to="/allrequests">All requests Recevied</Link>
                </li>
                <li>
                  <a onClick={handlelogout}>Logout</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default NavBar;
