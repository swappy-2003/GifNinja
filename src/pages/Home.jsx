import React, { useEffect, useState } from "react";
import { GifState } from "../Context/Gif-context";
import Gif from "../components/Gif";
import FilterGIf from "../components/FilterGIf";
import Loader from "../components/Loader";

const Home = () => {
  const { gf, filter, setFilter, favourites, gifs, setGifs } = GifState();
  const [loading, setLoading] = useState(true);

  const fetchTrendingGifs = async () => {
    const { data } = await gf.trending({
      limit: 20,
      type: filter,
      rating: "g",
      random_id: Math.floor(Math.random() * 1000000),
    });
    setGifs(data);
    setLoading(false);  // Directly set loading to false after fetching data
  };

  useEffect(() => {
    setLoading(true);   // Set loading to true when filter changes
    fetchTrendingGifs();
  }, [filter]);

  return (
    <div className="">
      <img
        src="/banner.gif"
        alt="earth banner"
        className="mt-2 rounded w-full"
      />
      {<FilterGIf showTrending />}
      {loading ? (
        <Loader />
      ) : (
        <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
          {gifs.map((gif) => {
            return <Gif gif={gif} key={gif.title} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
