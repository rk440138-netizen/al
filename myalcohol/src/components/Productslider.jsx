import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProductSlider() {
 const products = [
    { title: "Balvenie DoubleWood 12", imgUrl: "/images/whisky7.jpg" },
    { title: "Balvenie Caribbean Cask 14", imgUrl: "/images/whisky8.jpg" },
    { title: "Balvenie Single Barrel 12", imgUrl: "/images/whisky3.jpg" },
    { title: "Balvenie Single Barrel 15", imgUrl: "/images/whisky4.jpg" },
    { title: "Balvenie DoubleWood 17", imgUrl: "/images/whisky5.jpg" },
    { title: "Balvenie PortWood 21", imgUrl: "/images/whisky6.jpg" },
  
  ];

  return (
    <div className="w-full h-[70vh]"> {/* Full width slider with fixed height */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {products.map((prod, i) => (
          <SwiperSlide key={i} className="w-full h-full">
            <div className="relative w-full h-full">
              <img
                src={prod.imgUrl}
                alt={prod.title}
                className="w-full h-full object-cover"
              />
              {/* Optional overlay text */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded">
                {prod.title}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
