// src/components/CollectionProductGrid.jsx
import React from "react";
import CollectionProductCart from "./Collectionproductcart";

const products = [
  {
    title: "Balvenie Single Barrel 12",
    imgUrl: "/images/whisky7.jpg",
    price: 1000,
    discount: "51%",
    bestseller: true,
  },
  {
    title: "Balvenie Single Barrel 12",
    imgUrl: "/images/whisky8.jpg",
    price: 5000,
    discount: "42%",
    bestseller: true,
  },
  {
    title: "Balvenie Single Barrel 12",
    imgUrl: "/images/whisky7.jpg",
    price: 4000,
    discount: "51%",
    bestseller: true,
  },
  {
    title: "Balvenie Single Barrel 12",
    imgUrl: "/images/whisky7.jpg",
    price: 4000,
    discount: "51%",
    bestseller: true,
  },
  {
    title: "Balvenie Single Barrel 12",
    imgUrl: "/images/whisky7.jpg",
    price: 4000,
    discount: "51%",
    bestseller: true,
  },
  {
    title: "Balvenie Single Barrel 12",
    imgUrl: "/images/whisky7.jpg",
    price: 4000,
    discount: "51%",
    bestseller: true,
  },
];

export default function CollectionProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
      {products.map((prod, idx) => (
        <CollectionProductCart key={idx} {...prod} />
      ))}
    </div>
  );
}
