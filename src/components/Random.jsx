import React, { useContext } from "react";
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";

export default function Random() {

  const {loading,gif,fetchData} = useGif();

  return (
    <div className="w-1/2 border h-[450px] border-black bg-green-500 rounded-lg 
    flex flex-col items-center gap-y-5 mt-[15px]">

        <h1 className="mt-[15px] text-2xl font-bold underline uppercase">A Random Gif</h1>

        {
          loading ? (<Spinner />) : (<img src={gif} width="450" className="h-[300px]"/>)
        }

        <button className="w-10/12 rounded-lg bg-yellow-500 text-2xl py-2 mb-[15px]"
         onClick={() => fetchData()}>Generate</button>

    </div>
  )
}
