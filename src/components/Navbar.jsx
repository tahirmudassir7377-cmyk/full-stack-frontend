import { Link, useNavigate } from "react-router-dom";
import { logout } from "../services/api";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error);
    }
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <Link to="/">
          <h1 className="text-2xl font-bold text-gray-900">
            Shop<span className="text-primary">Hub</span>
          </h1>
        </Link>

        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-primary transition">Home</Link></li>
          <li><a href="#" className="hover:text-primary transition">Products</a></li>
          <li><a href="#" className="hover:text-primary transition">Categories</a></li>
          <li><a href="#" className="hover:text-primary transition">About</a></li>
          <li><a href="#" className="hover:text-primary transition">Contact</a></li>
        </ul>

        <div className="flex items-center gap-4">
          <button className="text-gray-700 hover:text-primary">
            🛒 Cart
          </button>

          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-gray-700 font-medium">Hi, {user?.name}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="bg-primary text-white px-5 py-2 rounded-lg hover:bg-primary-dark transition">
                Login
              </button>
            </Link>
          )}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;