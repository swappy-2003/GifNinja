import { createContext, useState, useContext, useEffect } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";

const Gifcontext = createContext();

const Gifprovider = ({ children }) => {
  const [gifs, setGifs] = useState([]);
  const [filter, setFilter] = useState("gifs");
  const [favourites, setFavourites] = useState([]);

  const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_KEY);

  const addToFavorites = (id) => {
    const updatedFavorites = favourites.includes(id)
      ? favourites.filter((itemId) => itemId !== id)  // Remove from favorites
      : [...favourites, id];  // Add to favorites

    localStorage.setItem("favoriteGIFs", JSON.stringify(updatedFavorites));
    setFavourites(updatedFavorites);
  };

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favoriteGIFs")) || [];
    setFavourites(storedFavorites);
  }, []);

  return (
    <Gifcontext.Provider
      value={{ gf, gifs, setGifs, filter, setFilter, favourites, addToFavorites }}
    >
      {children}
    </Gifcontext.Provider>
  );
};

export const GifState = () => {
  return useContext(Gifcontext);
};

export default Gifprovider;
    