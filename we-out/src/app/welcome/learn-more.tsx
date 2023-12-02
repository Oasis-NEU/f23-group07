import profileSVG from '../../assets/profile-svgrepo-com.svg';
import handshakeSVG from '../../assets/handshake-svgrepo-com.svg';
import messageSVG from '../../assets/message-svgrepo-com.svg';

export default function LearnMore() {
    return (
<section className="bg-gray-900 text-white" style={{ height: '60vh' }}>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="mx-auto max-w-lg text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">Kickstart your fitness journey with NUGym</h2>

      <p className="mt-4 text-gray-300">
        Discover a dynamic web application designed for Northeastern University students, aimed at building a fitness community and helping users achieve their fitness goals.
      </p>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {/* Card 1: Personalized Profiles */}
      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-red-500/10 hover:shadow-red-500/10"
        href="#personalized-profiles"
      >
        {/* SVG for Personalized Profiles */}
        <img src={profileSVG.src} alt="Profile SVG" className="h-10 w-10" style={{maxHeight: 100}}/>
        <h2 className="mt-4 text-xl font-bold text-white">Personalized Profiles</h2>
        <p className="mt-1 text-sm text-gray-300">
          Create personalized profiles specifying your fitness goals, preferred workout routines, and availability.
        </p>
      </a>

      {/* Card 2: Matchmaking Algorithm */}
      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-red-500/10 hover:shadow-red-500/10"
        href="#matchmaking-algorithm"
      >
        {/* SVG for Matchmaking Algorithm */}
        <img src={handshakeSVG.src} alt="Matchmaking SVG" className="h-10 w-10" style={{maxHeight: 100}}/>
        <h2 className="mt-4 text-xl font-bold text-white">Matchmaking Algorithm</h2>
        <p className="mt-1 text-sm text-gray-300">
          A sophisticated algorithm suggests potential workout partners based on fitness goals, availability, and campus location.
        </p>
      </a>

      {/* Card 3: Messaging System */}
      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-red-500/10 hover:shadow-red-500/10"
        href="/services/messaging-system"
      >
        {/* SVG for Messaging System */}
        <img src={messageSVG.src} alt="Messaging SVG" className="h-10 w-10" style={{maxHeight: 100}}/>
        <h2 className="mt-4 text-xl font-bold text-white">Messaging System</h2>
        <p className="mt-1 text-sm text-gray-300">
          Communicate with gym buddies through a built-in messaging system, making it easy to plan workouts and coordinate schedules.
        </p>
      </a>
    </div>

    <div className="mt-12 text-center">
      <a
        href="/login"
        className="inline-block rounded bg-red-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-red-700 focus:outline-none focus:ring focus:ring-yellow-400">
        Get Started Today
      </a>
    </div>
  </div>
</section>
    )}