import { Link, useLocation } from "react-router-dom";
import {
  House,
  Users,
  Bell,
  User,
} from "lucide-react";

const MobileBottomNav = () => {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path;

  return (
    <div
      className="
      md:hidden
      fixed
      bottom-0
      left-0
      right-0
      bg-base-100
      border-t
      z-50
      "
    >
      <div className="flex justify-around py-2">

        <Link
          to="/"
          className={`flex flex-col items-center ${
            isActive("/") ? "text-primary" : ""
          }`}
        >
          <House size={22} />
          <span className="text-xs">Feed</span>
        </Link>

        <Link
          to="/allconnections"
          className={`flex flex-col items-center ${
            isActive("/allconnections")
              ? "text-primary"
              : ""
          }`}
        >
          <Users size={22} />
          <span className="text-xs">
            Connections
          </span>
        </Link>

        <Link
          to="/allrequests"
          className={`flex flex-col items-center ${
            isActive("/allrequests")
              ? "text-primary"
              : ""
          }`}
        >
          <Bell size={22} />
          <span className="text-xs">
            Requests
          </span>
        </Link>

        <Link
          to="/profile"
          className={`flex flex-col items-center ${
            isActive("/profile")
              ? "text-primary"
              : ""
          }`}
        >
          <User size={22} />
          <span className="text-xs">
            Profile
          </span>
        </Link>

      </div>
    </div>
  );
};

export default MobileBottomNav;