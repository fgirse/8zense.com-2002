
'use client'
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "./utils";
import * as THREE from 'three';

import Image from "next/image";
import LogoEZ from"@/public/assets/images/LogoEZ300.svg";
import { Group } from "three";

const ParticleRing = () => {
  return (
    <div className="relative">
      <Canvas
        camera={{
          position: [10, -7.5, -5],
        }}
        style={{ height: "100vh" }}
        className="bg-slate-900"
      >
        <OrbitControls maxDistance={20} minDistance={10} />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle />
      </Canvas>
<div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  flex flex-col items-center justify-center">
<p className="relative -top-48 text-[1.66rem] md:-top-72 md:text-5xl lg:text-5xl text-white text-center font-black uppercase">Herzlich willkommen<br/>welcome<br/>salut<br/>ciao<br/></p>

      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-zenseGreen w-[66vw] h-96 font-black text-6xl md:text-7xl lg:text-[11.33rem] text-center py-5 pointer-events-none">
        <div className="bg-black/70 mx-auto mb-36 relative mt-28 rouded-2xl h-[40vh] md:mx-auto md:mt-36 md:w-[66vw] md:h-[33vh] lg:w-[50vw] lg:h-[50vh]">
        <Image  className="mx-auto w-full absolute" src={LogoEZ}  alt="LogoEZCyan" sizes="100vw" fill/>
      </div >
      </div >
     {/* <h1 className="relative text-center text-4xl mt-7 md:text-7xl lg:text-9xl md:transform md:translate-y-32 text-white">8zense.com</h1>*/}
     </div>
    
    </div>
  );
};

const PointCircle = () => {
  const ref = useRef<Group | null>(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }: { position: number[]; color: string }) => {
  return (
    // @ts-expect-error - Passing a num array as opposed to a Vector3 is acceptable
    // and the referenced method in the documentation
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

export default ParticleRing;