import marino from '../../assets/marino.jpg'
import Link from 'next/link'

export default function Welcome() {

  return (

    <div className="relative flex items-center justify-center h-screen bg-cover bg-no-repeat bg-center" 
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.9)), url(${marino.src})`}}>
      <h1 className="absolute top-1/4 text-center text-6xl text-red-with-border">
        Welcome to NUgym!
      </h1>

      <h1 className="absolute top-1/3 text-center text-3xl text-white">
        Let's Get Started
      </h1>
      
      <div className="z-10">

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link className="font-bold block w-full rounded border border-white bg-red-500 px-12 py-3 text-sm text-white hover:bg-red-800 hover:text-gray-500 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto no-underline"
            href="/login">
            Login
          </Link>

          <Link className="font-bold block w-full rounded border border-white bg-red-500 px-12 py-3 text-sm text-white hover:bg-red-800 hover:text-gray-500 focus:outline-none focus:ring sm:w-auto no-underline"
            href="/learn-more">
            Learn More
          </Link>
        </div>
      </div>
    </div>

  );
}