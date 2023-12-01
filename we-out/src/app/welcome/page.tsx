'use client'
import Link from 'next/link'
import LearnMore from './learn-more';

export default function Welcome() {

  return (
    <div>
    <div className = "welcome">
      <div className="relative left-20 flex items-center justify-left h-screen bg-center pl-20 z-10">
        <h1 className="absolute top-1/4 text-center text-6xl text-red-with-border">
          NUGym<span className="text-white">.</span>
        </h1>   
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link className="font-bold block w-full rounded border border-white bg-black px-12 py-3 text-sm text-white hover:border-opacity-50 hover:bg-opacity-75 hover:text-gray-500 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto no-underline"
            href="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
    <div>
    <LearnMore />
    </div>
    </div> 
  );
}