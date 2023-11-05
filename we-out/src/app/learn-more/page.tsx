import marino from '../../assets/learnmore.jpeg'
import Link from 'next/link'

export default function LearnMore() {

  return (

    <div 
        className="relative flex items-center justify-center h-screen bg-cover bg-no-repeat bg-center" 
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.9)), url(${marino.src})`
        }}>
      <h1
        className="absolute top-1/4 text-center text-6xl text-red-with-border">
        About NUgym
      </h1>

      
      <div className="z-10">

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            className="font-bold block w-full rounded border border-white bg-red-500 px-12 py-3 text-sm text-white hover:bg-red-800 hover:text-gray-500 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto no-underline"
            href="/welcome">
            Home
          </Link>
        </div>
      </div>

      <div className="rounded-box-left">
        <div className="text-box">
          <p className="font-style">
          FitBuddyNU is a dynamic web application designed exclusively for students at Northeastern University, 
          with the primary goal of fostering a sense of community and helping users achieve their fitness objectives. 
          This user-friendly platform allows students to connect with like-minded peers who share similar fitness goals
          and interests, enabling them to team up for productive and enjoyable gym sessions. 
          </p>
        </div>
      </div>

      <div className="rounded-box-right">
        <div className="text-box">
          <p className="font-style">
            Key features of FitBuddyNU include: <br /><br />
          • Students can create personalized profiles by specifying their fitness goals, preferred workout routines, and availability.<br /><br />
          • Sophisticated algorithm to suggest potential workout partners based on common fitness goals, availability, and location within the university campus.<br /><br />
          • Communicate with potential gym buddies through a built-in messaging system, making it easy to plan workouts and coordinate schedules.<br /><br />




          
          </p>
        </div>
      </div>



    </div>

  );
}