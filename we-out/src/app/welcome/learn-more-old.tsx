import Image from 'next/image';

export default function LearnMore() {
  return (
    <section className="bg-gray-900 text-white z-10" style={{ height: '50vh' }}>
      <div className="max-w-screen-xl px-3 py-6 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold sm:text-4xl">About Us</h2>
          <p className="mt-4 text-gray-300">
            FitBuddyNU is a dynamic web application designed exclusively for students at Northeastern University, 
            with the primary goal of fostering a sense of community and helping users achieve their fitness objectives. 
            This user-friendly platform allows students to connect with like-minded peers who share similar fitness goals
            and interests, enabling them to team up for productive and enjoyable gym sessions.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
            </span>
            <div>
              <h2 className="text-lg font-bold">Personalized Profiles</h2>
              <p className="mt-1 text-sm text-gray-300">
                Students can create personalized profiles by specifying their fitness goals, preferred workout routines, and availability.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
              {/* SVG or icon can be kept or changed here */}
            </span>
            <div>
              <h2 className="text-lg font-bold">Matchmaking Algorithm</h2>
              <p className="mt-1 text-sm text-gray-300">
                Sophisticated algorithm to suggest potential workout partners based on common fitness goals, availability, and location within the university campus.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
              {/* SVG or icon can be kept or changed here */}
            </span>
            <div>
              <h2 className="text-lg font-bold">Messaging System</h2>
              <p className="mt-1 text-sm text-gray-300">
                Communicate with potential gym buddies through a built-in messaging system, making it easy to plan workouts and coordinate schedules.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
