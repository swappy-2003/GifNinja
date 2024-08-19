import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GifState } from "../Context/Gif-context";
import FilterGIf from "../components/FilterGIf";
import Gif from "../components/Gif";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]); // Fixed the state variable name
  const { gf, filter } = GifState();
  const { query } = useParams();

  const fetchSearchResults = async () => {
    try {
      const { data } = await gf.search(query, {
        sort: "relevant",
        lang: "en",
        type: filter,
        limit: 30,
      });
      setSearchResults(data); // Corrected state update
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  useEffect(() => {
    if (query) {
      fetchSearchResults();
    }
  }, [query, filter]); // Added query to the dependency array

  return (
    <div className="my-4">
      <h2 className="text-5xl pb-3 font-extrabold">{query}</h2>
      <FilterGIf alignLeft={true} />

      {searchResults.length > 0 ? (
        <div className="columns-2 md:columns-3 lg:columns-4 gap-2">
          {searchResults.map((gif) => (
            <Gif gif={gif} key={gif.id} />
          ))}
        </div>
      ) : (
        <span>No GIFs found for {query}. Try searching for stickers instead?</span>
      )}
    </div>
  );
};

export default Search;
