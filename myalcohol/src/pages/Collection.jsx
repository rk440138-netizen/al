// src/pages/CollectionPage.jsx
import React from "react";
import CollectionProductGrid from "../components/Collectionproductgrid";

export default function CollectionPage() {
  return (
    <main className="min-h-screen bg-white font-josefin">
      {/* Page Header */}
      <section className="text-center py-10">
        <h1 className="text-3xl font-bold ">Shop All Products</h1>
        
      </section>

      {/* Filter & Sort */}
      <div className="flex justify-between items-center px-6 py-4 border-y">
        <button className="px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-gray-800">
          FILTER +
        </button>

        <select className="px-4 py-2 border rounded text-sm">
          <option value="featured">Sort By</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <CollectionProductGrid />
      </div>
    </main>
  );
}
