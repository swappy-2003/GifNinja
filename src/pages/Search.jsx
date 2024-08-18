import { useState } from "react"
import { useParams } from "react-router-dom"
import { GifState } from "../Context/Gif-context";




const Search = () => {

  const [setsearchResults, setSetsearchResults] = useState([]);
  const {gf,filter}=GifState();
  const {query} = useParams();
  return (
    <div>Search</div>
  )
};

export default Search