import React from "react";
import ProductGrid from "./Productgrid";
import ProductSlider from "./Productslider";


export default function Main() {
  return (
    <main className="flex-1">
      <div className="">
       
        <ProductSlider />
      </div>
      
      <ProductGrid />
      

      <section
  className="relative bg-cover bg-center h-[50vh] flex flex-col justify-center items-center text-center text-white"
  style={{
    backgroundImage:
      "url('/images/whisky1.jpg')",
  }}
>
  {/* Dark overlay for better text visibility */}
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative z-10">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      Shop Our Amazing Selection of Liquor, Beer, And Wine
    </h1>
    <button className="px-6 py-2 border-2 border-green-500 hover:bg-white hover:text-black transition">
      Shop Now
    </button>
  </div>
</section>

    </main>
  );
}
