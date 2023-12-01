'use client';
import marino from '../../assets/marino.jpg'


function Dashboard() {

  const data = [
    {
      "firstName": "John",
      "lastName": "Doe",
      "profilePicture": marino.src,

      "mondayAvailable": true,
      "tuesdayAvailable": false,
      "wednesdayAvailable": true,
      "thursdayAvailable": false,
      "fridayAvailable": true,
      "saturdayAvailable": false,
      "sundayAvailable": true,

      "experienceLevel": "Beginner"
    },
    {
      "firstName": "Jane",
      "lastName": "Doe",
      "profilePicture": marino.src,

      "mondayAvailable": true,
      "tuesdayAvailable": false,
      "wednesdayAvailable": true,
      "thursdayAvailable": false,
      "fridayAvailable": true,
      "saturdayAvailable": false,
      "sundayAvailable": true,

      "experienceLevel": "Intermediate"
    },
    {
      "firstName": "Bob",
      "lastName": "Smith",
      "profilePicture": "",

      "mondayAvailable": true,
      "tuesdayAvailable": false,
      "wednesdayAvailable": true,
      "thursdayAvailable": false,
      "fridayAvailable": true,
      "saturdayAvailable": false,
      "sundayAvailable": true,

      "experienceLevel": "Advanced"
    }
  ]

  //TODO: Fetch user data from the database



  function getDaysAvailable(
    mondayAvailable: boolean,
    tuesdayAvailable: boolean,
    wednesdayAvailable: boolean,
    thursdayAvailable: boolean,
    fridayAvailable: boolean,
    saturdayAvailable: boolean,
    sundayAvailable: boolean
  ) {
    const daysAvailable = [];

    if (mondayAvailable) {
      daysAvailable.push("Monday");
    }

    if (tuesdayAvailable) {
      daysAvailable.push("Tuesday");
    }

    if (wednesdayAvailable) {
      daysAvailable.push("Wednesday");
    }

    if (thursdayAvailable) {
      daysAvailable.push("Thursday");
    }

    if (fridayAvailable) {
      daysAvailable.push("Friday");
    }

    if (saturdayAvailable) {
      daysAvailable.push("Saturday");
    }

    if (sundayAvailable) {
      daysAvailable.push("Sunday");
    }

    return daysAvailable;
  }

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, right: 0 }}>
        <button onClick={() => alert('Edit profile')}>Edit Profile</button>
        <button onClick={() => alert('Log out')}>Log Out</button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {data.map((item, index) => (
          <div key={index} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
            
            {/* Profile Picture */}
            <img src={item.profilePicture} alt='Profile Picture' width="500"/>

            {/* First and Last Name */}
            <p>{item.firstName + " " + item.lastName}</p>

            {/* Days Available */}
            <p>{"Days Available: " + getDaysAvailable(
              item.mondayAvailable,
              item.tuesdayAvailable,
              item.wednesdayAvailable,
              item.thursdayAvailable,
              item.fridayAvailable,
              item.saturdayAvailable,
              item.sundayAvailable
            ).join(", ")}</p>

            {/* Experience Level */}
            <p>{"Experience Level: " + item.experienceLevel}</p>

            {/* Like and Reject Buttons */}
            <button onClick={() => alert('Liked')}>Like</button>
            <button onClick={() => alert('Rejected')}>Reject</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;