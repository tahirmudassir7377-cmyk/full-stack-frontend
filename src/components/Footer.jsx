function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10">

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Shop<span className="text-blue-500">Hub</span>
            </h2>
            <p className="text-sm leading-6">
              Your one-stop shop for quality products at the best prices.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">Products</a></li>
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Returns</a></li>
              <li><a href="#" className="hover:text-white transition">Track Order</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4 text-xl">
              <a href="#" className="hover:text-white transition">🔵</a>
              <a href="#" className="hover:text-white transition">🐦</a>
              <a href="#" className="hover:text-white transition">📸</a>
              <a href="#" className="hover:text-white transition">💼</a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
          © 2026 ShopHub. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
