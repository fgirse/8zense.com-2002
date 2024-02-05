import { SignIn } from "@clerk/nextjs";
import React from "react";
import Image from "next/image";
import Locked from"../../../../public/assets/images/locked.png";

export default function Page() {
  return (
    <>

    <div className="bg-stone-700 py-7 flex flex-col gap-y-5 items-center justify-center">
      <div className="flex flex-col justify-center items-center">
      <div className="w-40 mb-32 flex-col items-center mx-auto ">
      <Image className="w-36" src={Locked} alt="Illustration Schloss"/>
      </div>
        <p className="mt-16 text-5xl text-center text-slate-200">Dieser Inhalt ist nur nach Anmeldung bzw. Registrierung zugänglich!</p>
        <h1 className="text-3xl md:text-xl lg:text-[0.66rem] text-center text-slate-500">Melden Sie sich bitte an!</h1>
    <div></div>
      <SignIn />
    </div>
</div>
  </>
  );
}
