import react from "react"
import Random from "./components/Random"
import Tag from "./components/Tag"

export default function App() {
  return (


    <div className="flex flex-col w-screen h-screen background relative overflow-x-hidden items-center">
        <h1 className="bg-white text-4xl rounded-lg w-11/12 text-center mt-[40px] 
        px-10 py-2 font-bold mx-auto ">RANDOM GIFS</h1>


        <div className="flex flex-col items-center w-full">
           <Random />
           <Tag />
        </div>
    </div>

  )
}
