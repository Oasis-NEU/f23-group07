import marino from '../../assets/learnmore.jpeg';
import Link from 'next/link';

export default function LearnMore() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundImage: `url(${marino})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: '#ffffff'
  };

  const headerStyle = {
    textAlign: 'center',
    fontSize: '4rem', // Adjusted for better readability
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' // Text shadow for contrast
  };

  const textBoxStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background for readability
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '800px', // Limit the width for better readability
    margin: '20px'
  };

  const textStyle = {
    fontSize: '18px', // Larger font size for readability
    lineHeight: '1.6', // Improved line height
    color: '#ffffff'
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>
        About NUgym
      </h1>
      <div style={textBoxStyle}>
        <p style={textStyle}>
          NUGym is a dynamic web application designed exclusively for students at Northeastern University, 
          with the primary goal of fostering a sense of community and helping users achieve their fitness objectives. 
          This user-friendly platform allows students to connect with like-minded peers who share similar fitness goals
          and interests, enabling them to team up for productive and enjoyable gym sessions. 
          <br /><br />
          
          Key features of NUGym include: <br /><br />
          • Students can create personalized profiles by specifying their fitness goals, preferred workout routines, and availability.<br />
          • Sophisticated algorithm to suggest potential workout partners based on common fitness goals, availability, and location within the university campus.<br />
          • Communicate with potential gym buddies through a built-in messaging system, making it easy to plan workouts and coordinate schedules.<br />
        </p>
      </div>
    </div>
  );
}
