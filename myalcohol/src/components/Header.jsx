import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart,User,Heart,Search,Wine } from "lucide-react";

export default function Header() {
  return (
    <div>
      <header className="bg-yellow-500 px-6 py-1 flex justify-end items-center gap-6 text-sm">
        <button className="flex items-center gap-1 hover:text-gray-100">
          <Search size={16} />
          
        </button>
        <Link to="/wishlist" className="flex items-center gap-1 hover:text-gray-700">
          <Heart size={16} />
          
        </Link>
        <Link to="/cart" className="flex items-center gap-1 hover:text-gray-700">
          <ShoppingCart size={16} />
         
        </Link>
        <Link to="/login" className="flex items-center gap-1 hover:text-gray-700">
          <User size={16} />
          
        </Link>
      </header>
       <div className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2 mb-1">
       <Link to="/" className="flex items-center gap-2">
  <Wine size={28} className="text-amber-600" />
  <div className="text-2xl font-logo font-bold tracking-wide cursor-pointer hover:text-amber-600 transition">
    JACK DANIEL
  </div>
</Link>

        
      </div>
       
          <ul className="flex gap-6 font-bold text-white">
         
           <Link to='/home'> <li className="hover:text-gray-700">Home</li>
           </Link>
           <Link to='/collection' > <li className="hover:text-gray-700">Collection</li>
           </Link>
          
           <Link to='/about'>  <li className="hover:text-gray-700">About</li>
           </Link>
           <Link to='/contact'>  <li className="hover:text-gray-700">Contact us</li>
           </Link>
           
          </ul>
        </div>
    </div>
  );
}
