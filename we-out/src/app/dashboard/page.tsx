'use client';
import marino from '../../assets/marino.jpg'
import adam from '../../assets/adam.png'
import win from '../../assets/win.png'
import will from '../../assets/will.jpeg'
import kevin from '../../assets/kevin.jpeg'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'


function Dashboard() {

  console.log("Currently on Dashboard");

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
      "profilePicture": will.src,

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
      "profilePicture": kevin.src,

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

  function removeSelf(fullName: string) {
    console.log("Full Name: " + fullName)
    for (let item of data) {
      if (item.firstName + item.lastName === fullName) {
        data.splice(data.indexOf(item), 1);
      }
    }
  }

  const urlSearchParams = new URLSearchParams(useSearchParams());
  removeSelf(urlSearchParams.get('current_user'))
  
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


  const handleLike = () => {
    console.log("Like");
    return 3;
  }

  const handleReject = () => {
    console.log("Reject")
  }
  
  function removeCard(index: number) {
    console.log("Index: " + index)
    console.log(data);
    data.splice(index, 1);
    console.log(data);
  }

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ 
          position: 'absolute', 
          top: 0, 
          right: 0, 
          display: 'flex', // Flex container
          alignItems: 'center' // Align items vertically in the center
      }}>
          <Link
            className='mr-2 mt-2 mb-2'
            style={{
              backgroundColor: 'orange', // Background color
              color: 'white',             // Text color
              border: '2px solid orange', // Border
              padding: '10px 20px',       // Padding
              borderRadius: '5px',        // Rounded corners
              outline: 'none',            // Removes the default focus outline
              cursor: 'pointer',          // Changes the cursor on hover
              textDecoration: 'none',     // Removes underline from link
              boxSizing: 'border-box',    // Include padding and border in the total width and height
              fontWeight: 'bold',         // Bold font
              width: '150px',             // Absolute width
              height: '50px',             // Absolute height
              fontSize: '16px',           // Font size
              fontFamily: 'Arial',        // Font family
              lineHeight: '30px',         // Adjust line height for vertical centering
              justifyContent: 'center',   // Center text horizontally
              alignItems: 'center',       // Center text vertically
              display: 'flex'             // Use flexbox for centering
            }}
            href='/customize-profile'
          >Edit Profile</Link>
          <form action="/auth/signout" method="post" style={{ margin: 0 }}>
            <button
              className='mr-2 mt-2 mb-2'
              style={{
                backgroundColor: 'gray', // To match the Link's style
                color: 'white',             // Text color
                border: '2px solid gray', // Border
                padding: '10px 20px',       // Padding
                borderRadius: '5px',        // Rounded corners
                outline: 'none',            // Removes the default focus outline
                cursor: 'pointer',          // Changes the cursor on hover
                boxSizing: 'border-box',    // Include padding and border in the total width and height
                fontWeight: 'bold',         // Bold font
                width: '120px',             // Absolute width
                height: '50px',             // Absolute height
                fontSize: '16px',           // Font size
                fontFamily: 'Arial',        // Font family
                lineHeight: '30px',         // Adjust line height for vertical centering
                justifyContent: 'center',   // Center text horizontally
                alignItems: 'center',       // Center text vertically
                display: 'flex'             // Use flexbox for centering
              }}
            >Log Out</button>
          </form>
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
            <a
              className="inline-block ml-2 mr-2 mt-2 mb-2 rounded bg-green-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-green-500"
              onClick={handleLike}
            >Like</a>
            <a
              className="inline-block ml-2 mr-2 mt-2 mb-2 rounded bg-red-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-red-500"
              onClick={() => removeCard(index)}
            >Reject</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;