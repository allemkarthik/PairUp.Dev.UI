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
  const handleLogout = async () => {
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

  const navLinkStyle = (path) =>
    location.pathname === path
      ? "btn btn-primary btn-sm"
      : "btn btn-ghost btn-sm";

  return (
    <div className="navbar bg-base-100 border-b border-base-300 shadow-sm px-4 md:px-8">
      {/* Logo */}
      <div className="flex-1">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="https://res.cloudinary.com/dawmcvq4q/image/upload/v1782453814/logo_pph9u3.png"
            alt="PairUpDev Logo"
            className="w-10 h-10 object-contain"
          />

          <span className="text-xl font-bold tracking-wide">PairUpDev</span>
        </Link>
      </div>

      {user && (
        <>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <Link to="/" className={navLinkStyle("/")}>
              Feed
            </Link>

            <Link
              to="/allconnections"
              className={navLinkStyle("/allconnections")}
            >
              Connections
            </Link>

            <Link to="/allrequests" className={navLinkStyle("/allrequests")}>
              Requests
            </Link>

            <div className="divider divider-horizontal mx-1"></div>

            <span className="font-medium">Hi, {user.firstName}</span>

            <Link to="/profile" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoUrl} alt="profile" />
              </div>
            </Link>

            <button onClick={handleLogout} className="btn btn-error btn-sm">
              Logout
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img src={user.photoUrl} alt="profile" />
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-64 p-2 shadow-lg"
            >
              <li className="menu-title">
                <span>Hi, {user.firstName}</span>
              </li>

              <li>
                <Link to="/profile">Settings</Link>
              </li>

              <div className="divider my-1"></div>

              <li>
                <Link to="/about">About</Link>
              </li>

              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>

              <li>
                <Link to="/terms">Terms & Conditions</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>

              <div className="divider my-1"></div>

              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default NavBar;
