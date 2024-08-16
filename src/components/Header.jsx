import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiEllipsisVertical, HiMiniBars3BottomRight } from "react-icons/hi2";
import { GifState } from "../Context/Gif-context";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);

  const { gf, filter, setfilter, favourites } = GifState();

  const fetchGifCategories = async () => {
    const { data } = await gf.categories();
    setCategories(data);
  };

  useEffect(() => {
    fetchGifCategories();
  }, []);

  return (
    <nav>
      <div className="relative flex items-center justify-between mb-2">
        <Link className="flex items-center justify-between gap-2" to="/">
          <img src="/logo.svg" className="w-8" alt="Logo" />
          <h1 className="text-white text-5xl tracking-tight cursor-pointer font-bold">
            GIF-NINJA
          </h1>
        </Link>
        <div className="font-bold text-md flex gap-5 items-center justify-between ">
          {/* Render categories */}

          {categories?.slice(0, 5)?.map((category, i) => {
            return (
              <Link
                key={category.name_encoded}
                to={`/${category.name_encoded}`}
                className="px-4 py-1 rounded-lg hover:gradient border-b-4 hidden lg:block"
              >
                {category.name} {/* Corrected here */}
              </Link>
            );
          })}

          <button onClick={() => setShowCategories(!showCategories)}>
            <HiEllipsisVertical
              size={35}
              className={`py-0.5 hover:gradient ${
                showCategories ? "gradient" : ""
              } border-b-4 lg:block`}
            />
          </button>

          {favourites.length > 0 && (
            <div className="h-9 bg-gray-700 pt-1.5 px-6 cursor-pointer rounded">
              <Link to="/favourites">Favourites GIFs</Link>
            </div>
          )}

          <button>
            <HiMiniBars3BottomRight
              size={30}
              className="text-sky-400 block lg:hidden"
            />
          </button>
        </div>

        {showCategories && (
          <div className="absolute right-0 top-14 px-10 pt-6 pb-9 w-full gradient z-20">
            <span className="text-3xl font-extrabold">Categories</span>
            <hr className="bg-gray-100 opacity-50 my-5"/>
            <div className="  grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
              {categories.map((category) => {
                return (<Link className="font-bold " key={category.name} to={`/${category.name_encoded}`}>{category.name}</Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
      {/* {search} */}
    </nav>
  );
};

export default Header;
