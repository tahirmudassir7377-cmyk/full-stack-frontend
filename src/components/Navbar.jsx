function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-2xl font-bold text-gray-900">
          Shop<span className="text-blue-600">Hub</span>
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li><a href="#" className="hover:text-blue-600 transition">Home</a></li>
          <li><a href="#" className="hover:text-blue-600 transition">Products</a></li>
          <li><a href="#" className="hover:text-blue-600 transition">Categories</a></li>
          <li><a href="#" className="hover:text-blue-600 transition">About</a></li>
          <li><a href="#" className="hover:text-blue-600 transition">Contact</a></li>
        </ul>

        <div className="flex items-center gap-4">
          <button className="text-gray-700 hover:text-blue-600">
            🛒 Cart
          </button>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            Login
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;