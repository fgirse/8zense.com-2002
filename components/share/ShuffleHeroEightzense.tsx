
"use client"
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ShuffleHero = () => {
  return (
    <section className="container w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
    <div>
        <span className="block mb-4 text-xs md:text-sm font-medium">
          8zense.com
        </span>
        <h1 className="relative px-1 -top-2 <uppercase text-[2.9rem] font-black md:text-[9.11rem] bg-gradient-to-b from-cyan-700 via bg-yellow-500 to-zinc-300 bg-clip-text text-transparent lg:-top-28 lg:text-[rem] lg:tracking-wider">Timeless Design + Interieure</h1>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          8zenSe.com steht für individuelles, extravagantes und exklusives Desing aus dem Marterial Beton in unterschiedlichen Designvariationen und Designformen
        </p>
        <button className="bg-zenseSignal text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          send email
        </button>
      </div>
    <ShuffleGrid />
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
    src: "/assets/images/LogoEZ30.png",
  },
  {
    id: 3,
  
    src: "/assets/images/EZver.png",
  },
  {
    id: 4,
    src: "/assets/images/EZ30.png",
  },
   
  {
    id: 5,
    src: "/assets/images/LogoEZver.svg",
  },
 
  {
    id: 6,
    src: "/assets/images/LogoEZ20.png",
  },
  {
    id: 7,
    src: "/assets/images/LogoEZCyan.png",
  },

  {
    id: 8,
    src: "/assets/images/8zenseVer.png",
  },
  {
    id: 9,
    src: "/assets/images/EZ30.png",
  },
  {
    id: 10,
    src: "/assets/images/LogoEZ.png",
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
    src: "/assets/images/Hotel-LogoEZCyan.png",
  },
  {
    id: 14,
    src: "/assets/images/LogoEZ30.png",
  },
  {
    id: 15,
    src: "/assets/images/LogoEZver.svg",
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