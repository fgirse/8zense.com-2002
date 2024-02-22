
'use client'
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "./utils";
import * as THREE from 'three';

import Image from "next/image";
import LogoEZ from"@/public/assets/images/LogoEZ30.svg";
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
<p className="relative -top-36 text-2xl md:text-4xl lg:text-6xl text-white text-center font-black uppercase">Herzlich willkommen<br/>welcome<br/>salut<br/>ciao<br/></p>
      <h1 className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-zenseGreen font-black text-6xl md:text-7xl lg:text-[11.33rem] pointer-events-none">
        8zense.com
        <Image className="" src={LogoEZ}  alt="LogoEZCyan" sizes="100vw" style={{width:'100%',height: 'auto',}}/>
      </h1>
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