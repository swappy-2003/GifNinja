import React, { useEffect, useState } from 'react';
import { GifState } from '../Context/Gif-context';
import Gif from '../components/Gif';

function Favourites() {
  const [favouritesGifs, setFavouritesGifs] = useState([]);
  const { gf, favourites } = GifState();

  useEffect(() => {
    const fetchFavouritesGifs = async () => {
      try {
        if (favourites.length > 0) {
          // Debugging: Log favourite IDs
          console.log('Fetching GIFs for IDs:', favourites);
          
          const gifs = await Promise.all(
            favourites.map(async (id) => {
              try {
                console.log(`Fetching GIF with ID: ${id}`); // Debugging: Log each ID
                const { data } = await gf.gif(id);
                return data;
              } catch (error) {
                console.error(`Error fetching GIF with ID ${id}:`, error);
                return null;
              }
            })
          );
          setFavouritesGifs(gifs.filter((gif) => gif !== null));
        } else {
          setFavouritesGifs([]);
        }
      } catch (error) {
        console.error("Failed to fetch favorite GIFs:", error);
      }
    };

    fetchFavouritesGifs();
  }, [favourites, gf]);

  return (
    <div className='mt-2'>
      <span className='faded-text'>My Favorites</span>
      {favouritesGifs.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-3">
          {favouritesGifs.map((gif) => (
            <Gif gif={gif} key={gif.id} className="w-full" />
          ))}
        </div>
      ) 
      : 
      (
        <div className="text-center text-gray-500 py-10">
          No favorite GIFs yet.
        </div>
      )}
    </div>
  );
}

export default Favourites;
