import React from "react";


export default function ProductCart({ title, description, imgUrl, price }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center hover:shadow-xl transition">
      {/* Product Image */}
      <img
        src={imgUrl}
        alt={title}
        className="w-40 h-40 object-contain mb-3"
      />

      {/* Product Info */}
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm mt-1">{description}</p>
      <p className="text-red-600 font-bold mt-1">Rs {price}</p>

    

      {/* Buttons */}
      <button className="mt-4 w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
        Add to Cart
      </button>
    </div>
  );
}
