"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image";

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
      <div className="grid grid-cols-2 text-white text-center">
        <div className="flex col-span-2 gap-4 justify-center relative py-4">
        <a href="https://www.instagram.com/shuaib_11_" target="_blank" rel="noopener noreferrer">
          <Image
            src="/insta.webp"
            alt="Instagram"
            width={24}
            height={28}
            className="rounded-md"
          />
        </a>

        <a href="https://www.linkedin.com/in/shuaibullattil" target="_blank" rel="noopener noreferrer">
          <Image
            src="/linkedin.webp"
            alt="LinkedIn"
            width={24}
            height={24}
            className="rounded-md"
          />
        </a>

        <a href="https://www.behance.net/shuaibullattil" target="_blank" rel="noopener noreferrer">
          <Image
            src="/behance.webp"
            alt="Behance"
            width={28}
            height={28}
            className="rounded-md"
          />
        </a>

        <a href="https://github.com/shuaibullattil" target="_blank" rel="noopener noreferrer">
          <Image
            src="/github.webp"
            alt="GitHub"
            width={28}
            height={28}
            className="rounded-md"
          />
        </a>
        
        </div>
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
          <p>UI/UX Designer</p>
        </div>
        <div 
          className="flex col-span-2 justify-center px-8 py-8 transition-opacity duration-1000"
          style={{ opacity, transitionDelay: '600ms' }}
        >
          <p className="italic">I&apos;m Shuaib Ullattil, a full-stack developer with a strong focus on building dynamic web applications using Next.js, FastAPI, and MongoDB. I also specialize in UI/UX design, crafting user-friendly and visually appealing interfaces. I am passionate about combining both development and design to create seamless, functional experiences for users.</p>
        </div>
      </div>
    </div>
  );
}