"use client"

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Skizze from "@/public/assets/images/skizze.png";
import Image from "next/image";
import Button from "@/components/share/Button";

const ShuffleHero = () => {
  return (
    
    <section className="container w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
    
    <div className="-mt-60 flex flex-col items-start ">
        <span className="block mb-4 text-xs md:text-sm font-medium">
          8zense.com
        </span>
        <div className="container py-3 bg-zenseGrey/20 rounded-xl">
        <h1 className="relative px-1 uppercase text-[3.333rem] font-black md:text-[9.11rem] bg-gradient-to-b from-zenseCyan via bg-yellow-500 to-zinc-400 bg-clip-text text-transparent lg:top  lg:tracking-wider leading-10 lg:text-[5rem] ">Timeless Design</h1>
      

        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
        <span className="text-zenseSignal font-bold">8zenSe.com</span> steht für individuelles, extravagantes und exklusives Desing aus dem Marterial Beton in unterschiedlichen Designvariationen und Designformen
        </p>
        <Button/>
                </div>
      </div>
  
    <ShuffleGrid />
<section className="container py-3 bg-zenseGrey/20 rounded-xl">
    <h1 className="px-1 mt-7 uppercase text-[2.7rem] font-black leading-9 md:text-[9.11rem] bg-gradient-to-b from-zenseCyan via bg-yellow-500 to-zinc-300 bg-clip-text text-transparent lg:-top-28 lg:text-[rem] lg:tracking-wider">Interieure Design</h1>
    <div className="mt-3 relative w-[75vw] h-[20vh]">
 <Image src={Skizze} fill sizes="100vw" alt="Skizze"/>

    </div>
    <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          <span className="text-zenseSignal font-bold">8zenSe.com</span> begleitet,beratet und unterstüzt Sie professionell bei der Planung und Umsetzung Ihres individuellen Interieure Desings in Wohnung, Haus, Büro ofer Praxis. Sprechen Sie uns an -Wir freun uns auf Sie!
        </p>
        <Button/>
</section>
      
    
  </section>
  );
};

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "/assets/images/LogoEZ30.png",
  },
 
  {
    id: 2,
    src: "/assets/images/cyan.svg",
  },
  {
    id: 3,
  
    src: "/assets/images/8zenseVer.png",
  },
  {
    id: 4,
    src: "/assets/images/EZ.svg",
  },
   
  {
    id: 5,
    src: "/assets/images/8zenseVer.png",
  },
 
  {
    id: 6,
    src: "/assets/images/LogoEZ.svg",
  },
  {
    id: 7,
    src: "/assets/images/LogoEZcyan.svg",
  },

  {
    id: 8,
    src: "/assets/images/8zensever.png",
  },
  {
    id: 9,
    src: "/assets/images/EZ40.png",
  },
  {
    id: 10,
    src: "/assets/images/Logocyan.svg",
  },
  {
    id: 11,
    src: "/assets/images/LogoEZver.png",
  },
  {
    id: 12,
    src: "/assets/images/LogoEZ20.png",
  },
  {
    id: 13,
    src: "/assets/images/LogoEZCyan.png",
  },
  {
    id: 14,
    src: "/assets/images/LogoEZ30.png",
  },
  {
    id: 15,
    src: "/assets/images/cyan.svg",
  },
  {
    id: 16,
    src: "/assets/images/LogoEZ20.png",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<any>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;