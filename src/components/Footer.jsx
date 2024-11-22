import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8">
        {/* Column 1 */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <div className="max-w-4xl mx-auto text-center">
            {/* Centered Image */}
            <div className="flex justify-center mb-6">
              <img
                className="w-20"
                src="https://recbanda.ac.in/wp-content/uploads/2016/11/about_logo.png"
                alt="College Logo"
              />
            </div>
            <p className="text-gray-400">
              Rajkiya Engineering College <br />
              Atarra, Banda – 210201 <br /> <br />
              Telephone: +915191254301 <br /> <br />
              Email: director@recbanda.ac.in
            </p>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="/TPC" className="hover:underline text-gray-400">
              Training & Placement Cell
              </a>
            </li>
            <li>
              <a href="/AboutUs" className="hover:underline text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              className="hover:text-blue-500 transition"
            >
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a
              href="https://twitter.com"
              className="hover:text-blue-400 transition"
            >
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a
              href="https://instagram.com"
              className="hover:text-pink-500 transition"
            >
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center">
        <p className="text-gray-500">
          © 2024 Rajkiya Engineering College. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
