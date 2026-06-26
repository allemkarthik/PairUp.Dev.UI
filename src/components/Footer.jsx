
import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    { name: "About", path: "/about" },
    { name: "Privacy", path: "/privacy" },
    { name: "Terms", path: "/terms" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="hidden md:block bg-base-200 border-t mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-10 flex justify-between items-center">

        {/* Left */}
        <div>
          <h2 className="text-xl font-bold">PairUp.dev</h2>
          <p className="text-sm text-gray-500">
            Connect. Build. Grow.
          </p>
        </div>

        {/* Middle Links (dynamic) */}
        <div className="flex gap-6 text-sm">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="hover:underline"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right */}
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} PairUp.dev
        </div>

      </div>
    </footer>
  );
};

export default Footer;