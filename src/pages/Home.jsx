import React, { useEffect } from "react";
import { GifState } from "../Context/Gif-context";
import Gif from "../components/Gif";

const Home = () =>{
  const { gf, filter, setfilter, favourites,gifs,setGifs } = GifState();
  const fetchTrendingGifs = async () => {
    const { data } = await gf.trending({
      limit: 20,
      type: filter,
      rating: "g",
    });
    setGifs(data);
  };
  useEffect(() => {
    fetchTrendingGifs();
  }, [filter]);

  return (
    <div className="">
      <img
        src="/banner.gif"
        alt="earth banner"
        className="mt-2 rounded w-full"
      />
      {/* <filtergif/> */}

      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
        {gifs.map((gif)=>
        {
         return  <Gif  gif={gif} key={gif.title}/>
        })}
      </div>
     
    </div>
  );
};

export default Home;
