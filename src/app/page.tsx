import React from "react";
import Image from "next/image";
import { BarChartPhilanthropia } from "./BarChart";
import PieChartPhilanthropia from "./PieChart";
import Users from "./Index.js";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-purple-200"> {/* Added bg-purple-200 for light purple background */}
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <h1 className="text-3xl font-semibold mb-8">My Donations</h1>

      <div className="flex flex-wrap justify-between w-full mb-8">
        <div className="w-full lg:w-1/2">
          <h1 className="text-xl font-semibold mb-4">Atrium Health Donation Distribution</h1>
          <BarChartPhilanthropia />
        </div>

        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <h1 className="text-xl font-semibold mb-4">Donation Distribution by Themes</h1>
          <PieChartPhilanthropia />
        </div>
      </div>

      {/* Organizations Grid */}
      <div className="grid grid-cols-3 gap-12 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        
        {/* Atrium Health Card */}
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://atriumhealth.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/logos/atriumhealthlogo.png"
              alt="Atrium Health Logo"
              width={450}
              height={300}
              priority
            />
          </a>
          <h2 className="mt-4 mb-3 text-xl font-semibold">Atrium Health</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn more about Atrium Health and their mission.
          </p>
        </div>

        {/* YMCA Card */}
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://www.ymca.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/logos/ymcalogo.png"
              alt="YMCA Logo"
              width={150}
              height={100}
              priority
            />
          </a>
          <h2 className="mt-4 mb-3 text-xl font-semibold">YMCA</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn more about YMCA and their programs.
          </p>
        </div>

        {/* Users Component */}
        <Users />
        
        {/* American Royal Association Card */}
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://www.mtsociety.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/logos/marinetechlogo.png"
              alt="Marine Tech Logo"
              width={150}
              height={100}
              priority
            />
          </a>
          <h2 className="mt-4 mb-3 text-xl font-semibold">American Royal Association</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn more about the American Royal Association and their cause.
          </p>
        </div>

      </div>
    </main>
  );
}
