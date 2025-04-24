import React from "react"
import {Mail} from "lucide-react"

export default function Home(){
  return(
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="grid grid-cols-2 text-white">
        <h1 className="text-orange font-extrabold text-6xl col-span-2">Shuaib Ullattil</h1>
        <div className="col-span-1 text-center mt-2 font-bold">
          <p>Full Stack Developer</p>
        </div>
        <div className="col-span-1 text-center mt-2 font-bold">
          <p>UI/UX Designer</p>
        </div>
        <div className="flex col-span-2 gap-2">
        <Mail className="text-white"/><p>shuaibullattil7768@gmail.com</p>
        </div>
      </div>
    </div>
  );
}