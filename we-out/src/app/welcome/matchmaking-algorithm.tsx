import workoutPartnersTwo from '../../assets/workout-partner-2.jpg';

export default function MatchmakingAlgorithm() {
    return (
    <section className= "bg-gray-900 text-white">
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-first lg:h-full">
          <img
            alt="Party"
            src={workoutPartnersTwo.src}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
  
        <div className="lg:py-24">
          <h2 className="text-3xl font-bold sm:text-4xl">How To Git Started</h2>
  
          <p className="mt-4 text-gray-600">
            To git started, make an account and fill out your profile information. When finished, you will be
            directed to the dashboard, where you can start browsing potential workout partners. You can also
            recustomize your profile whenever you feel that your preferences have changed. Feel free to reach
            out to as many people as you want and start making connections.
          </p>
  
          <a
            href="#"
            className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Git Started!
          </a>
        </div>
      </div>
    </div>
  </section>
    );
}
