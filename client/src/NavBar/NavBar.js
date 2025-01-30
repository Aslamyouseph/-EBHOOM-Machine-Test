import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in (using localStorage as an example)
    const user = localStorage.getItem("user");
    if (user) setIsLoggedIn(true);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login"); // Redirect to login after logout
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-lg">
      {/* Logo / Brand */}
      <Link to="/" className="text-xl font-bold text-white hover:text-gray-300">
        chatApp
      </Link>

      {/* Navigation Links */}
      <ul className="flex space-x-6">
        {isLoggedIn ? (
          <>
            <li>
              <Link to="/profile" className="hover:text-gray-300">
                User Account
              </Link>
            </li>
            <li>
              <Link to="/editProfile" className="hover:text-gray-300">
                Edit Account
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="text-red-500 hover:text-white font-semibold"
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" className="hover:text-gray-300">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="hover:text-gray-300">
                Signup
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
