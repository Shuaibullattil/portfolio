"use client"

import React, { useState, useEffect } from "react"

export default function Home() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    // Set timeout to allow the component to render first
    const timer = setTimeout(() => {
      setOpacity(1);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return(
    <div className="flex justify-center items-center h-screen" style={{backgroundImage:`linear-gradient(to top right, black 40%, red, orange)`}}>
      <div className="grid grid-cols-2 text-white">
        <h1 
          className="text-white font-extrabold text-6xl col-span-2 transition-opacity duration-1000"
          style={{ opacity }}
        >
          Shuaib Ullattil
        </h1>
        <div 
          className="flex col-span-2 text-center mt-2 font-bold gap-8 justify-center transition-opacity duration-1000"
          style={{ opacity, transitionDelay: '300ms' }}
        >
          <p>Full Stack Developer</p>
          <p>Full Stack Developer</p>
        </div>
      </div>
    </div>
  );
}