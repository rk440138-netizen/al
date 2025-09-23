import React from "react";
import ProductCart from "./ProductCart";

const products = [
  {
    title: "Perfume One",
     description: "Smooth Tennessee whiskey with sweet vanilla and toasted oak.",
    imgUrl: "/images/whisky7.jpg",
    price: 1099,
    
  },
  {
    title: "Perfume Two",
    description: "Smooth Tennessee whiskey with sweet vanilla and toasted oak.",
    imgUrl: "/images/whisky8.jpg",
    price: 6000,
   
  },
  {
    title: "Perfume Three",
    description: "Smooth Tennessee whiskey with sweet vanilla and toasted oak.",
    imgUrl: "/images/whisky3.jpg",
    price: 7000,
   
  },
  {
    title: "Perfume Four",
    description: "Smooth Tennessee whiskey with sweet vanilla and toasted oak.",
    imgUrl: "/images/whisky7.jpg",
    price: 8000,
  },
  {
    title: "Perfume One",
     description: "Smooth Tennessee whiskey with sweet vanilla and toasted oak.",
    imgUrl: "/images/whisky7.jpg",
    price: 1099,
    
  },
  {
    title: "Perfume Two",
    description: "Smooth Tennessee whiskey with sweet vanilla and toasted oak.",
    imgUrl: "/images/whisky8.jpg",
    price: 6000,
   
  },
  {
    title: "Perfume Three",
    description: "Smooth Tennessee whiskey with sweet vanilla and toasted oak.",
    imgUrl: "/images/whisky3.jpg",
    price: 7000,
   
  },
  {
    title: "Perfume Four",
    description: "Smooth Tennessee whiskey with sweet vanilla and toasted oak.",
    imgUrl: "/images/whisky7.jpg",
    price: 8000,
  },
];

export default function ProductGrid() {
  return (
    <section className="py-10 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-6">New Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {products.map((prod, idx) => (
          <ProductCart
            key={idx}
            title={prod.title}
            description={prod.description}
            imgUrl={prod.imgUrl}
            price={prod.price}
          />
        ))}
      </div>
    </section>
  );
}
