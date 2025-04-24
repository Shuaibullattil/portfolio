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
    <div className="flex justify-center items-center min-h-screen py-8" style={{backgroundImage:`linear-gradient(to top right, #080560, black)`}}>
      <div className="grid grid-cols-1 md:grid-cols-2 text-white text-center w-full max-w-6xl px-4">
        <div className="flex col-span-1 md:col-span-2 gap-4 justify-center relative py-4 transition-opacity duration-1000"
          style={{ opacity, transitionDelay: '900ms' }}>
          <a href="https://www.instagram.com/shuaib_11_" target="_blank" rel="noopener noreferrer">
            <Image
              src="/insta.webp"
              alt="Instagram"
              width={24}
              height={28}
              className="rounded-md hover:scale-110 transition-transform"
            />
          </a>

          <a href="https://www.linkedin.com/in/shuaibullattil" target="_blank" rel="noopener noreferrer">
            <Image
              src="/linkedin.webp"
              alt="LinkedIn"
              width={24}
              height={24}
              className="rounded-md hover:scale-110 transition-transform"
            />
          </a>

          <a href="https://www.behance.net/shuaibullattil" target="_blank" rel="noopener noreferrer">
            <Image
              src="/behance.webp"
              alt="Behance"
              width={28}
              height={28}
              className="rounded-md hover:scale-110 transition-transform"
            />
          </a>

          <a href="https://github.com/shuaibullattil" target="_blank" rel="noopener noreferrer">
            <Image
              src="/github.webp"
              alt="GitHub"
              width={28}
              height={28}
              className="rounded-md hover:scale-110 transition-transform"
            />
          </a>
        </div>
        
        <h1 
          className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl col-span-1 md:col-span-2 transition-opacity duration-1000"
          style={{ opacity }}
        >
          Shuaib Ullattil
        </h1>
        
        <div 
          className="flex flex-col sm:flex-row col-span-1 md:col-span-2 text-center mt-2 font-bold gap-2 sm:gap-8 justify-center transition-opacity duration-1000"
          style={{ opacity, transitionDelay: '300ms' }}
        >
          <p className="text-sm sm:text-base">Full Stack Developer</p>
          <p className="text-sm sm:text-base">UI/UX Designer</p>
        </div>
        
        <div 
          className="flex col-span-1 md:col-span-2 justify-center px-4 sm:px-8 md:px-16 py-4 sm:py-6 md:py-8 transition-opacity duration-1000"
          style={{ opacity, transitionDelay: '600ms' }}
        >
          <p className="italic text-xs sm:text-sm md:text-base">I&apos;m Shuaib Ullattil, a full-stack developer with a strong focus on building dynamic web applications using Next.js, FastAPI, and MongoDB. I also specialize in UI/UX design, crafting user-friendly and visually appealing interfaces. I am passionate about combining both development and design to create seamless, functional experiences for users.</p>
        </div>

        <div className="grid col-span-1 md:col-span-2 px-4 sm:px-8 md:px-16 mb-8 transition-opacity duration-1000"
          style={{ opacity, transitionDelay: '750ms' }}>
          <div className="flex h-full w-full items-center justify-center">
            <div className="grid h-full w-full gap-2 sm:gap-4 p-2 grid-cols-2 md:grid-cols-4 grid-rows-10 rounded-lg shadow-md">
            
              <div 
                className="col-span-2 row-span-10 bg-opacity-20 rounded-lg shadow-md flex items-center justify-center p-4 hover:bg-opacity-30 transition-all"
              >
                <a href="https://www.behance.net/gallery/222208471/Blue-In-E-commerce-Platform">
                  <Image
                    src="/blue in mockup.png"
                    alt="Behance"
                    width={800}
                    height={800}
                    className="rounded-md hover:scale-110 transition-transform"
                  />
                </a>
              </div>
            
              <div 
                className="col-span-2 row-span-10 bg-opacity-20 rounded-lg shadow-md flex items-center justify-center p-4 hover:bg-opacity-30 transition-all"
              >
                <a href="https://www.behance.net/gallery/222208077/LateCheck">
                  <Image
                    src="/Latecheck mockup.png"
                    alt="Behance"
                    width={800}
                    height={800}
                    className="rounded-md hover:scale-110 transition-transform"
                  />
                </a>
              </div>
            
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}