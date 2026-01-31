"use client";

import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white ">
   
      <div className="flex items-center gap-24 justify-between">
        <Image src="/logo.png" alt="Logo" width={40} height={40}  className="rounded-full"/>
        <h1 className="text-xl font-bold">My App</h1>
      </div>
      <nav className="flex gap-6">
        <Link className="hover:bg-indigo-700 hover:px-4 py-2 rounded-md active:bg-indigo-800" href="/">Home</Link>
        <Link className="hover:bg-indigo-700 hover:px-4 py-2 rounded-md active:bg-indigo-800" href="/about">About</Link>
        <Link className="hover:bg-indigo-700 hover:px-4 py-2 rounded-md active:bg-indigo-800" href="/product">product</Link>
        <Link className="hover:bg-indigo-700 hover:px-4 py-2 rounded-md active:bg-indigo-800" href="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
