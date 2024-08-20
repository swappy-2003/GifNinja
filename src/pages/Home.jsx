import React, { useEffect, useState } from "react";
import { GifState } from "../Context/Gif-context";
import Gif from "../components/Gif";
import FilterGIf from "../components/FilterGIf";
import Loader from "../components/Loader";

const Home = () => {
  const { gf, filter, setFilter, favourites, gifs, setGifs } = GifState();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const fetchTrendingGifs = async () => {
    setLoading(true);
    const { data } = await gf.trending({
      limit: 20,
      offset: (page - 1) * 20,
      type: filter,
      rating: "g",
    });
    setGifs(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchTrendingGifs();
  }, [page, filter]);

  return (
    <div className="p-4">
      <img
        src="/banner.gif"
        alt="earth banner"
        className="mt-2 rounded w-full"
      />
      <FilterGIf showTrending />
      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
        {gifs.map((gif) => (
          <Gif gif={gif} key={gif.id} />
        ))}
      </div>
      {loading && <Loader />}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className={`px-4 py-2 rounded text-white ${
            page === 1
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          Previous
        </button>
        <button
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 rounded text-white bg-blue-500 hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
