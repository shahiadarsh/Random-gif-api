import axios from "axios";
import react, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {

    // const [loading,setLoading] = useState(false);

    // async function fetchData() {
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //     //destructuring 
    //     const {data} = await axios.get(url);
    //     const imageSource = data.data.images.downsized_large.url;
    //     console.log(imageSource);
    //     setGif(imageSource);
    //     setLoading(false);
    // }

    // useEffect(() => {
    //     fetchData();
    // },[]);

    // const [gif,setGif] = useState("");

    // function clickHandler() {
    //     fetchData();
    // }


    const {gif,loading,fetchData} = useGif();

    return (
        <div className="w-1/2 border h-[450px] border-black bg-green-500 rounded-lg 
        flex flex-col items-center gap-y-5 mt-[15px]" >

            <h1 className="mt-[15px] text-2xl font-bold underline uppercase">A Random Gif</h1>

            
            {
                loading ? (<Spinner />) : (<img src={gif} width="450" className="h-[300px]"/>)
            }

            <button className="w-10/12 rounded-lg bg-yellow-500 text-2xl py-2 mb-[15px]"
            onClick={() => fetchData()}>Generate</button>

        </div>
    )
}



export default Random;