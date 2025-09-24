import React, { useState, useRef } from "react";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  return (
    <div className="flex items-center gap-2">
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "w-40 md:w-60 opacity-100" : "w-0 opacity-0"
        }`}
      >
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onBlur={() => setIsOpen(false)} // blur → close
          placeholder="Search..."
          className="px-3 py-1 rounded-full text-black focus:outline-none w-full"
        />
      </div>

      {!isOpen && (
        <button
          onClick={handleToggle}
          className="flex items-center gap-1 hover:text-gray-100"
        >
          <Search size={16} />
        </button>
      )}
    </div>
  );
}
