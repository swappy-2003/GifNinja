import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { HiMiniXMark, HiOutlineMagnifyingGlass } from "react-icons/hi2";

const GifSearch = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const searchGifs = async () => {
    if (query.trim() === "") {
      return;
    }
    navigate(`/search/${query}`);

};
const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      searchGifs();
    }
};


  return (
    <div className="flex relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown} // Add keydown event listener
        placeholder="search all the gifs and Stickers"
        className="w-full pl-4 pr-14 py-5 text-xl text-black rounded-tl rounded-bl border-gray-200 outline-none"
      />
      
      { query &&(<button
        className="absolute bg-gray-300 opacity-90 rounded-full right-20 mr-2 top-6"
        onClick={()=> setQuery("")}
      >
        <HiMiniXMark size={25}  />
      </button>
    )}

      <button
        className="bg-gradient-to-r from-red-400 to-pink-500 text-white px-4 py-2 rounded-tr rounded-br"
        onClick={searchGifs}
      >
        <HiOutlineMagnifyingGlass size={35} className="-scale-x-100" />
      </button>
      
    </div>
  );
};

export default GifSearch;
