//import { GET } from './api/get/route'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

/*
type Repo = {
    full_name: string
    monday_available: boolean
    tuesday_available: boolean
    wednesday_available: boolean
    thursday_availableDB: boolean
    friday_availableDB: boolean
    saturday_availableDB: boolean
    sunday_availableDB: boolean
    experience_level: String
  }
  
export const getServerSideProps = (async (context) => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const repo = await res.json()
    return { props: { repo } }
  }) satisfies GetServerSideProps<{
    repo: Repo
  }>
*/

export default function CustomizeProfile() {

    //TODO: Fetch existing data from database


      

    const profilePictureDB = "TEST.png";

    const mondayAvailableDB = true;
    const tuesdayAvailableDB = false;
    const wednesdayAvailableDB = true;
    const thursdayAvailableDB = false;
    const fridayAvailableDB = true;
    const saturdayAvailableDB = false;
    const sundayAvailableDB = true;

    const experienceLevelDB = "Beginner";
    
    const beginnerLevelDB = experienceLevelDB === "Beginner";
    const intermediateLevelDB = false;
    const advancedLevelDB = false;

    const formStyle = {
        maxWidth: '500px',
        margin: '0 auto',
        padding: '20px',
        background: '#f5f5f5',
        borderRadius: '8px'
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '5px',
        color: 'black',
        fontWeight: 'bold'
    };

    const inputStyle = {
        marginBottom: '10px',
        width: '100%',
        padding: '8px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        color: 'black'
    };

    const buttonStyle = {
        backgroundColor: 'green',
        color: 'white',
        border: '2px solid green',
        padding: '10px 20px',
        borderRadius: '5px',
        outline: 'none',
        cursor: 'pointer',
        width: '100%',
        fontSize: '16px'
    };

    return (
        <form action="/customize-profile/api/post" method="post" style={formStyle}>

            <div style={{ marginBottom: '20px' }}>
                <label style={{ ...labelStyle, color: "red" }} htmlFor="profile-picture">Profile Picture</label>
                <input style={inputStyle} required type="file" name="profile-picture" />
            </div>

            <label style={{ ...labelStyle, color: "red" }}>Days Available</label>

            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                <div key={day} style={{ marginBottom: '10px' }}>
                    <label style={labelStyle} htmlFor={`${day.toLowerCase()}-available`}>{day}</label>
                    <input type="checkbox" name={`${day.toLowerCase()}-available`} />
                </div>
            ))}

            <label style={{ ...labelStyle, color: "red" }} htmlFor="experience-level">Experience Level</label>
            <div style={{ marginBottom: '10px' }}>
                <label style={labelStyle} htmlFor="Beginner">Beginner</label>
                <input type="radio" required name="experience-level" value="Beginner" />
            </div>

            <div style={{ marginBottom: '10px' }}>
                <label style={labelStyle} htmlFor="Intermediate">Intermediate</label>
                <input type="radio" name="experience-level" value="Intermediate" />
            </div>

            <div style={{ marginBottom: '10px' }}>
                <label style={labelStyle} htmlFor="Advanced">Advanced</label>
                <input type="radio" name="experience-level" value="Advanced" />
            </div>


            <button style={buttonStyle} type="submit">Save</button>
        </form>
    )
}