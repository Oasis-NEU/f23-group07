'use client';
import marino from '../../assets/marino.jpg'
import adam from '../../assets/adam.png'
import win from '../../assets/win.png'


function Dashboard() {

  const data = [
    {
      "firstName": "Win",
      "lastName": "Tongtawee",
      "profilePicture": win.src,

      "mondayAvailable": false,
      "tuesdayAvailable": true,
      "wednesdayAvailable": true,
      "thursdayAvailable": true,
      "fridayAvailable": true,
      "saturdayAvailable": false,
      "sundayAvailable": false,

      "morningAvailable": true,
      "afternoonAvailable": true,
      "eveningAvailable": true,

      "experienceLevel": "Intermediate"
    },
    {
      "firstName": "Adam",
      "lastName": "Ma",
      "profilePicture": adam.src,

      "mondayAvailable": false,
      "tuesdayAvailable": true,
      "wednesdayAvailable": true,
      "thursdayAvailable": true,
      "fridayAvailable": true,
      "saturdayAvailable": false,
      "sundayAvailable": false,

      "morningAvailable": true,
      "afternoonAvailable": false,
      "eveningAvailable": false,

      "experienceLevel": "Intermediate"
    },
    {
      "firstName": "Will",
      "lastName": "Silver",
      "profilePicture": marino.src,

      "mondayAvailable": true,
      "tuesdayAvailable": false,
      "wednesdayAvailable": true,
      "thursdayAvailable": false,
      "fridayAvailable": true,
      "saturdayAvailable": false,
      "sundayAvailable": true,

      "morningAvailable": true,
      "afternoonAvailable": true,
      "eveningAvailable": true,

      "experienceLevel": "Intermediate"
    },
    {
      "firstName": "Kevin",
      "lastName": "Ma",
      "profilePicture": marino.src,

      "mondayAvailable": true,
      "tuesdayAvailable": false,
      "wednesdayAvailable": true,
      "thursdayAvailable": false,
      "fridayAvailable": true,
      "saturdayAvailable": false,
      "sundayAvailable": true,

      "morningAvailable": true,
      "afternoonAvailable": true,
      "eveningAvailable": true,

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

  function getTimesAvailable(
    morningAvailable: boolean,
    afternoonAvailable: boolean,
    eveningAvailable: boolean
  ) {
    const timesAvailable = [];

    if (morningAvailable) {
      timesAvailable.push("Morning");
    }

    if (afternoonAvailable) {
      timesAvailable.push("Afternoon");
    }

    if (eveningAvailable) {
      timesAvailable.push("Evening");
    }

    return timesAvailable;
  }

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, right: 0 }}>
        <button
          className='mr-2 mt-2 mb-2'
          style={{
            backgroundColor: 'orange', // Background color
            color: 'white',             // Text color
            border: '2px solid orange', // Border
            padding: '10px 20px',       // Padding
            borderRadius: '5px',        // Rounded corners
            outline: 'none',            // Removes the default focus outline
            cursor: 'pointer'           // Changes the cursor on hover
          }}
          onClick={() => alert('Edit profile')}
        >Edit Profile</button>
        <button
          className='mr-2 mt-2 mb-2'
          style={{
            backgroundColor: 'gray', // Background color
            color: 'white',             // Text color
            border: '2px solid gray', // Border
            padding: '10px 20px',       // Padding
            borderRadius: '5px',        // Rounded corners
            outline: 'none',            // Removes the default focus outline
            cursor: 'pointer'           // Changes the cursor on hover
          }}
          onClick={() => alert('Log out')}
        >Log Out</button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        {data.map((item, index) => (
          <div key={index} style={{ border: '1px solid black', backgroundColor: '#FFDAB9', margin: '10px', padding: '10px' }}>
            
            {/* Profile Picture */}
            <img src={item.profilePicture} className="ml-2 mr-2 mt-2 mb-2" style={{border: '1px solid black'}} alt='Profile Picture' width="500"/>

            {/* First and Last Name */}
            <h1 className="text-3xl ml-2 mb-2" >{item.firstName + " " + item.lastName}</h1>

            {/* Days Available */}
            <p className="ml-2 mb-2" >{"Days Available: " + getDaysAvailable(
              item.mondayAvailable,
              item.tuesdayAvailable,
              item.wednesdayAvailable,
              item.thursdayAvailable,
              item.fridayAvailable,
              item.saturdayAvailable,
              item.sundayAvailable
            ).join(", ")}</p>

            {/* Times Available */}
            <p className="ml-2 mb-2" >{"Times Available: " + getTimesAvailable(
              item.morningAvailable,
              item.afternoonAvailable,
              item.eveningAvailable
            ).join(", ")}</p>

            {/* Experience Level */}
            <p className="ml-2 mb-2" >{"Experience Level: " + item.experienceLevel}</p>

            {/* Like and Reject Buttons */}
            <button
              className="ml-2 mr-2 mt-2 mb-2"
              style={{
                  backgroundColor: 'green', // Background color
                  color: 'white',             // Text color
                  border: '2px solid green', // Border
                  padding: '10px 20px',       // Padding
                  borderRadius: '5px',        // Rounded corners
                  outline: 'none',            // Removes the default focus outline
                  cursor: 'pointer'           // Changes the cursor on hover
              }}
              onClick={() => alert('Liked')}
            >Like</button>
            <button
              className="ml-2 mr-2 mt-2 mb-2"
              style={{
                backgroundColor: 'red', // Background color
                color: 'white',             // Text color
                border: '2px solid red', // Border
                padding: '10px 20px',       // Padding
                borderRadius: '5px',        // Rounded corners
                outline: 'none',            // Removes the default focus outline
                cursor: 'pointer'           // Changes the cursor on hover
              }}
              onClick={() => alert('Rejected')}
            >Reject</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;