import { SignIn } from "@clerk/nextjs";
import React from "react";

export default function Page() {
  return (
    <>

    <div className="bg-stone-700 py-7 flex flex-col gap-y-5 items-center justify-center">

      <h1 className="text-sm md:text-sm lg:text-[0.66rem] text-center text-slate-500">

        Melden Sie sich bitte an!

      </h1>

      <p className="mt-rtext-xs text-center text-slate-200">Dieser Inhalt ist nur nach Anmeldung bzw. Registrierung zugänglich!</p>

      <SignIn />

    </div>

  </>
  );
}
