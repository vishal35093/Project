import React, { useState } from "react";

const products = [
  { id: 1, name: "Wireless Headphones", price: "$59.99" },
  { id: 2, name: "Smartwatch", price: "$149.99" },
  { id: 3, name: "Gaming Keyboard", price: "$89.99" },
  { id: 4, name: "4K Monitor", price: "$299.99" },
  { id: 5, name: "Smartphone", price: "$799.99" },
  { id: 6, name: "Bluetooth Speaker", price: "$49.99" },
  { id: 7, name: "Laptop", price: "$999.99" },
  { id: 8, name: "Tablet", price: "$399.99" },
];

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Search Products
        </h1>
        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Product Listing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-md rounded-lg p-6 hover:scale-105 transition-transform"
              >
                <h2 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-gray-600">{product.price}</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">Add to cart</button>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-600">
              No products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
