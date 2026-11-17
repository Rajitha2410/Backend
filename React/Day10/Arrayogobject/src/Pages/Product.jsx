


import { useState } from 'react';

const Product = () => {

  // Product Array
  const [products] = useState([
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mouse", price: 500 },
    { id: 3, name: "Keyboard", price: 1500 },
    { id: 4, name: "Monitor", price: 12000 },
    { id: 5, name: "Headphone", price: 2000 }
  ]);

  // Calculate Total Price using reduce()
  const totalPrice = products.reduce(
    (total, product) => total + product.price,
    0
  );

  // Filter Products Above 2000
  const filteredProducts = products.filter(
    (product) => product.price > 2000
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-3">
          Product Price Dashboard
        </h1>

        <p className="text-center text-gray-500 mb-8">
          View products and calculate total price
        </p>

        {/* Total Products and Price */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">

          <div className="bg-blue-600 text-white p-6 rounded-xl shadow-md">
            <h2 className="text-lg">Total Products</h2>
            <p className="text-3xl font-bold mt-2">
              {products.length}
            </p>
          </div>

          <div className="bg-green-600 text-white p-6 rounded-xl shadow-md">
            <h2 className="text-lg">Total Price</h2>
            <p className="text-3xl font-bold mt-2">
              ₹{totalPrice.toLocaleString("en-IN")}
            </p>
          </div>

        </div>

        {/* All Products */}
        <h2 className="text-2xl font-bold text-gray-800 mb-5">
          All Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          {products.map((product) => (

            <div
              key={product.id}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
            >

              <h3 className="text-xl font-semibold text-gray-800">
                {product.name}
              </h3>

              <p className="text-green-600 font-bold text-lg mt-3">
                Price: ₹{product.price.toLocaleString("en-IN")}
              </p>

            </div>

          ))}

        </div>

        {/* Filtered Products */}
        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-5">
          Products Above ₹2,000
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          {filteredProducts.map((product) => (

            <div
              key={product.id}
              className="bg-white p-6 rounded-xl shadow-md border border-green-200"
            >

              <h3 className="text-xl font-semibold text-gray-800">
                {product.name}
              </h3>

              <p className="text-green-600 font-bold text-lg mt-3">
                Price: ₹{product.price.toLocaleString("en-IN")}
              </p>

            </div>

          ))}

        </div>

        {/* Filter Count */}
        <p className="text-center text-gray-600 mt-6 font-semibold">
          Filtered Products: {filteredProducts.length}
        </p>

      </div>

    </div>
  );
};

export default Product;
