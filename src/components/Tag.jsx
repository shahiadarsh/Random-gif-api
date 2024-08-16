import React, { useState } from "react";
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";

export default function Tag() {

  const [tag,setTag] = useState("");

  const {gif,loading,fetchData} = useGif(tag);

  return (
    <div className="w-1/2 border h-[550px] border-black bg-blue-500 rounded-lg 
    flex flex-col items-center gap-y-5 mt-[15px]" >

        <h1 className="mt-[15px] text-2xl font-bold underline uppercase">Random {tag} Gif</h1>

        {
          loading ? (<Spinner />) : (<img src={gif} width="450" className="h-[300px]" />)
        }

        <input className="w-10/12 rounded-lg text-center text-lg py-2 mb-[3px]"
         onChange={(event) => setTag(event.target.value)} value={tag}/>

        <button className="w-10/12 rounded-lg bg-yellow-500 text-2xl py-2 mb-[15px]"
         onClick={() => fetchData(tag)}>Generate</button>

    </div>
  )
}
