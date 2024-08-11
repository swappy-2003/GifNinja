import { createContext } from "react";

const Gifcontext =createContext();

const Gifprovider=({childern})=>{
    return <Gifcontext.Provider>{childern}</Gifcontext.Provider>
}
export default Gifprovider;