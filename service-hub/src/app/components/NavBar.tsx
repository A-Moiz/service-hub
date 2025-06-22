"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-black shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 w-full">
        {/* App Icon + Title */}
        <div className="flex items-center gap-3">
          <Image src="/icon.svg" alt="App Icon" width={32} height={32} />
          <span className="text-xl font-semibold">Service Hub</span>
        </div>

        {/* Nav Links */}
        <ul className="flex gap-6 text-sm sm:text-base ml-auto">
          {["Features", "Pricing", "About", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="transition-all hover:text-blue-600 hover:font-bold hover:text-lg"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
