// src/components/CollectionProductCard.jsx
import React from "react";

export default function CollectionProductCart({
  title,
  imgUrl,
  price,
  discount,
  bestseller,
}) {
  return (
    <div className="relative bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition p-4 flex flex-col items-center">
      {/* Bestseller Badge */}
      {bestseller && (
        <span className="absolute top-3 left-3 bg-orange-400 text-white text-xs font-semibold px-2 py-1 rounded">
          BESTSELLER
        </span>
      )}

      {/* Product Image */}
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-60 object-contain mb-4"
      />

      {/* Product Info */}
      <h3 className="font-josefin text-lg font-semibold text-gray-800 text-center">
        {title}
      </h3>

      <p className="font-josefin text-xl font-bold text-green-600 mt-2">
        ₹ {price.toFixed(2)}
      </p>

      {/* Discount Badge */}
      {discount && (
        <span className="mt-3 bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded">
          {discount} OFF
        </span>
      )}
      <button
        onClick={() => onAddToCart(product)}
        className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
