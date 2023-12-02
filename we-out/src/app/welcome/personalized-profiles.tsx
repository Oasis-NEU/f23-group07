import workoutPartners from '../../assets/workout-partner.jpeg';

export default function PersonalizedProfiles() {
    return (
      <section className= "bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt="Party"
                src={workoutPartners.src}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">Partner Preferences</h2>

              <p className="mt-4 text-gray-600">
                Are you new to the gym and looking for someone to help you git started?
                Do you feel lonely going every day at 6 AM? Fear not. Users can share their
                fitness goals, availability, and level of experience through their profiles.
                Users' preferences are used to match them with potential workout partners that
                are most compatible with the aforementioned attributes. At NUgym, we believe that
                working out with a partner is more fun and motivating than working out alone.
              </p>
            </div>
          </div>
        </div>
      </section>
)}