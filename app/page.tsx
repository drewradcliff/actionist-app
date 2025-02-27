"use client";

import Image from "next/image";
import Header from "./header";
import { useState } from "react";
import clsx from "clsx";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className={clsx("h-full w-full", isMenuOpen && "fixed")}>
      <Header
        onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
        showNav={isMenuOpen}
      />
      <div className="flex flex-col items-center space-y-4 px-4 py-32 text-center sm:py-64">
        <Image src="/logo.svg" alt="actionist logo" width={250} height={250} />
        <h1 className="text-6xl font-semibold tracking-tighter">Actionist</h1>
        <p className="text-2xl text-zinc-500">
          Stop organizing your todo apps, simply start doing.
        </p>
      </div>
      <div className="flex flex-col items-center bg-gray-100 px-4 py-32 sm:py-64">
        <div className="flex flex-col items-center space-y-16 md:flex-row">
          <Image
            src="/iphone-screenshot.png"
            alt="iphone screenshot"
            width={400}
            height={400}
          />
          <ul className="list-disc space-y-4 pl-6 md:pl-24">
            <li className="text-2xl text-zinc-500">
              Designed for the easily distracted
            </li>
            <li className="text-2xl text-zinc-500">
              Tap to change task into &quot;DOING&quot;
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center px-4 py-32 sm:py-52">
        <Image
          src="/activation.png"
          alt="activation energy chart"
          width={700}
          height={700}
        />
        <p className="max-w-lg pt-16 text-xl text-zinc-500 sm:max-w-2xl sm:text-3xl">
          Just as in chemistry, where energy is needed to initiate a reaction,
          people often require a certain level of motivation to initiate change.
        </p>
      </div>
      <div className="flex flex-col items-center bg-gray-50 px-4 py-24">
        <p className="text-md max-w-lg pb-4 text-center font-semibold uppercase tracking-widest sm:text-2xl">
          There is an inverse relationship between things on your mind and those
          things getting done.
        </p>
        <p className="text-zinc-500">- David Allen</p>
      </div>
      <footer className="flex flex-col items-center justify-center space-y-8 py-12">
        <Image
          onClick={() => {
            window.open(
              "https://apps.apple.com/us/app/actionist-a-doing-app/id6477123297",
              "_blank",
            );
          }}
          className="cursor-pointer"
          alt="qr code"
          src="/qr-code.svg"
          width={150}
          height={150}
        />
        <p className="text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} Actionist. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
