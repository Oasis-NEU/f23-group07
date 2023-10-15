



export default function Welcome() {
    return (
      <div>
        <h1>Welcome to We Out!</h1>
        <p>Let's get started!</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="font-bold block w-full rounded border border-purple-500 bg-cyan-500 px-12 py-3 text-sm text-white hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto no-underline"
                href="login"
              >
                Login
              </a>

              <a
                className="font-bold block w-full rounded border border-purple-500 bg-cyan-500 px-12 py-3 text-sm text-white hover:bg-indigo-500 focus:outline-none focus:ring sm:w-auto no-underline"
                href="#section2"
              >
                Learn More
              </a>
      </div>
        </div>
    );
}

