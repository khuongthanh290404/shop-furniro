import React, { useState } from "react";
import { useProduct } from "../../hook/useProduct";
import { Link } from "react-router-dom";

const Shop = () => {
  const { products } = useProduct();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="">
      {/* Banner Section */}
      <section>
        <img
          src="../../../img/banner1.jpg"
          alt="Shop Banner"
          className="w-full"
        />
      </section>

      {/* Search Input */}
      <section className="container max-w-screen-xl mx-auto mt-8 px-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
        />
      </section>

      {/* Product Listing */}
      <section className="container max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {filteredProducts.map((p) => (
          <div key={p._id} className="text-center">
            <div className="bg-[#F5F5F5] p-4">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <Link to={`/detail/${p._id}`}>
              <h3 className="font-semibold text-lg mb-1">{p.name}</h3>
            </Link>
            <p className="text-gray-500 text-sm mb-2">Stylish cafe chair</p>
            <p className="font-semibold text-xl text-red-600 mb-3">{p.price}</p>
            <button className="border border-solid border-yellow-600 text-yellow-600 w-full font-semibold text-base py-2 hover:bg-yellow-600 hover:text-white">
              Add to Cart
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Shop;
