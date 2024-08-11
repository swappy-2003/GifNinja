import { createContext,useState, useContext } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";

const Gifcontext = createContext();

const Gifprovider = ({ children }) => {
  const [gifs, setgifs] = useState([]);
  const [filter, setfilter] = useState("gifs");
  const [favourites, setfavourites] = useState([]);

  const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_KEY);


  return (
    <Gifcontext.Provider
      value={{ gf, gifs, setgifs, filter, setfilter, favourites }}
    >
      {children}
    </Gifcontext.Provider>
  );
};

export const GifState = () => {
  return useContext(Gifcontext);
};
  
export default Gifprovider;
