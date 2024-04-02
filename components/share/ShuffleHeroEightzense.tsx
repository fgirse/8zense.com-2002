"use client"

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Skizze from "@/public/assets/images/skizze.png";
import Image from "next/image";
import Button from "@/components/share/Button";
//import MagnetButtonExample from "./MagnetButton";

const ShuffleHero = () => {
  return (

    
    <section className="container w-full px-8 py-12 grid grid-cols-1 lg:grid-cols-1 items-center gap-8 max-w-6xl mx-auto">
    
    <div className="-mt-48 flex flex-col items-start md:justify-around md:items-baseline ">
    
        <div className="container py-3 bg-zenseGrey/20 rounded-xl md:w-full">
        <h1 className="relative px-1 uppercase text-[3.333rem] font-black md:text-[3.31rem] bg-gradient-to-b from-slate-900 via bg-slate-600 to-slate-5000 bg-clip-text text-transparent lg:top  lg:tracking-wider leading-10 lg:text-[5rem]  ">Timeless Design</h1>
      

        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
        <span className="text-zenseSignal font-bold">8zenSe.com</span> steht für individuelles, extravagantes und exklusives Desing aus dem Marterial Beton in unterschiedlichen Designvariationen und Designformen
        </p>
        <Button/>
                </div>
      </div>
  <div className="md:translate transform -y-24" >
    <ShuffleGrid />
    </div>
<section className="container py-3 bg-slate-900/20 rounded-xl">
<h1 className="relative px-1 uppercase text-[3.333rem] font-black md:text-[3.31rem] bg-gradient-to-b from-slate-900 via bg-slate-600 to-slate-5000 bg-clip-text text-transparent lg:top  lg:tracking-wider leading-10 lg:text-[5rem]  ">Interior Design</h1>
    <div className="mt-3 relative w-[75vw] h-[24vh] lg:w-[53vw]">
 <Image src={Skizze} fill sizes="100vw" alt="Skizze"/>

    </div>
    <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          <span className="text-zenseSignal font-bold">8zenSe.com</span> begleitet, beratet und unterstützt Sie professionell bei der Planung und Umsetzung Ihres individuellen Interieure Desings in Wohnung, Haus, Büro ofer Praxis. Sprechen Sie uns an - Wir freuen uns auf Sie!
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
    src: "/assets/images/Chairred.svg",
  },
 
  {
    id: 2,
    src: "/assets/images/interiore13.jpg",
  },
  {
    id: 3,
  
    src: "/assets/images/Rastergrafikobg.png",
  },
  {
    id: 4,
    src: "/assets/images/interiore30.jpg",
  },
   
  {
    id: 5,
    src: "/assets/images/Kieselsteine.png",
  },
 
  {
    id: 6,
    src: "/assets/images/kiesbunt.png",
  },
  {
    id: 7,
    src: "/assets/images/LogoEZCyan.png",
  },

  {
    id: 8,
    src: "/assets/images/interiore21.jpg",
  },
  {
    id: 9,
    src: "/assets/images/hotel.png",
  },
  {
    id: 10,
    src: "/assets/images/LogoEZ.png",
  },
  {
    id: 11,
    src: "/assets/images/sketchobg.png",
  },
  {
    id: 12,
    src: "/assets/images/interiore11.jpg",
  },
  {
    id: 13,
    src: "/assets/images/Hotel-SaoPaulo.png",
  },
  {
    id: 14,
    src: "/assets/images/grafik6.png",
  },
  {
    id: 15,
    src: "/assets/images/interiore20.jpg",
  },
  {
    id: 16,
    src: "/assets/images/room.webp",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full bg-slate-900/50"
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