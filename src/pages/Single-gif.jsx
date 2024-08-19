import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GifState } from "../Context/Gif-context";
import Gif from "../components/Gif";
import { HiMiniChevronDown, HiMiniChevronUp, HiMiniHeart } from "react-icons/hi2";
import FollowOn from "../components/FollowOn";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaPaperPlane } from "react-icons/fa6";
import { IoCodeSharp } from "react-icons/io5";

const contentType = ["gifs", "sticker", "texts"];

const SingleGif = () => {
  const { type, slug } = useParams();
  const [gif, setGif] = useState({});
  const [relatedGifs, setRelatedGifs] = useState([]);
  const [readMore, setReadMore] = useState(false);
  const { gf, addToFavorites, favourites } = GifState();

  useEffect(() => {
    const fetchGif = async () => {
      try {
        const gifId = slug.split("-").pop();  // Extract the last part of the slug
        const { data } = await gf.gif(gifId);
        const { data: related } = await gf.related(gifId, { limit: 10 });

        setGif(data);
        setRelatedGifs(related);
      } catch (error) {
        console.error("Failed to fetch GIF:", error);
      }
    };

    if (contentType.includes(type)) {
      fetchGif();
    } else {
      console.error("Invalid content type");
    }
  }, [type, slug, gf]);

  return (
    <div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-4 gap-4 my-10">
        {/* Left Side - GIF Metadata */}
        <div className="sm:col-span-1">
          {gif?.user && (
            <>
              <div className="flex items-center gap-2">
                <img
                  src={gif?.user?.avatar_url}
                  alt={gif?.user?.display_name}
                  className="h-14"
                />
                <div>
                  <div className="font-bold">{gif?.user?.display_name}</div>
                  <div className="faded-text">@{gif?.user?.username}</div>
                </div>
              </div>

              {gif?.user?.description && (
                <p className="py-4 whitespace-pre-line text-sm text-gray-400">
                  {readMore
                    ? gif?.user?.description
                    : `${gif?.user?.description.slice(0, 100)}...`}
                  <span
                    className="flex items-center text-blue-500 cursor-pointer"
                    onClick={() => setReadMore(!readMore)}
                  >
                    {readMore ? (
                      <>
                        Read less <HiMiniChevronUp size={20} />
                      </>
                    ) : (
                      <>
                        Read more <HiMiniChevronDown size={20} />
                      </>
                    )}
                  </span>
                </p>
              )}
            </>
          )}

          <FollowOn />
          <div className="divider"></div>

          {gif?.source && (
            <div className="mt-4">
              <span className="text-sm text-gray-500">Source:</span>
              <div className="flex items-center text-sm font-bold gap-1 mt-1">
                <HiOutlineExternalLink size={20} />
                <a
                  href={gif.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="truncate"
                >
                  {gif.source}
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Center - GIF Display */}
        <div className="sm:col-span-2 flex justify-center">
          <div className="w-full sm:w-3/4">
            <div className="faded-text truncate mb-2">{gif.title}</div>
            <Gif gif={gif} hover={false} />
            <div className="flex sm:hidden gap-1">
              <img
                src={gif?.user?.avatar_url}
                alt={gif?.user?.display_name}
                className="h-14"
              />
              <div>
                <div className="font-bold">{gif?.user?.display_name}</div>
                <div className="text-sm text-gray-500">
                  @{gif?.user?.username}
                </div>
              </div>
              <button className="ml-auto">
                <FaPaperPlane size={25} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Favorites/Share/Embed */}
        <div className="sm:col-span-1 flex justify-center items-start">
          <div className="w-full">
            <div className="hidden sm:flex flex-col gap-5 mt-6">
              <button onClick={() => addToFavorites(gif.id)} className="flex gap-5 items-center font-bold text-lg">
                <HiMiniHeart
                  size={30}
                  className={`${favourites.includes(gif.id) ? "text-red-500" : ""}`}
                />
                Favourites
              </button>
              <button className="flex gap-6 items-center font-bold text-lg">
                <FaPaperPlane size={25}/>
                Share
              </button>
              <button className="flex gap-6 items-center font-bold text-lg">
                <IoCodeSharp size={30}/>
                Embed
              </button>
            </div>
          </div>
        </div>
      </div>
      <span className="font-extrabold flex justify-center text-center text-3xl sm:text-4xl lg:text-5xl">Related GIFs</span>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-3">
        {relatedGifs.slice(1).map((gif) => (
          <Gif gif={gif} key={gif.id} className="w-full" />
        ))}
      </div>
    </div>
  );
};

export default SingleGif;
