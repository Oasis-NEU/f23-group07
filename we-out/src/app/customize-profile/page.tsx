//import { GET } from './api/get/route'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'


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

    return (
        <form action="/customize-profile/api/post" method="post">
            <label htmlFor="profile-picture">Profile Picture</label>
            <input type="file" name="profile-picture" value={profilePictureDB}/>


            <label >Days Available</label>

            <label htmlFor="monday-available">Monday</label>
            <input type="checkbox" name="monday-available" checked={mondayAvailableDB}/>

            <label htmlFor="tuesday-available">Tuesday</label>
            <input type="checkbox" name="tuesday-available" checked={tuesdayAvailableDB}/>

            <label htmlFor="wednesday-available">Wednesday</label>
            <input type="checkbox" name="wednesday-available" checked={wednesdayAvailableDB}/>

            <label htmlFor="thursday-available">Thursday</label>
            <input type="checkbox" name="thursday-available" checked={thursdayAvailableDB}/>

            <label htmlFor="friday-available">Friday</label>
            <input type="checkbox" name="friday-available" checked={fridayAvailableDB}/>

            <label htmlFor="saturday-available">Saturday</label>
            <input type="checkbox" name="saturday-available" checked={saturdayAvailableDB}/>

            <label htmlFor="sunday-available">Sunday</label>
            <input type="checkbox" name="sunday-available" checked={sundayAvailableDB}/>


            <label htmlFor="experience-level">Experience Level</label>

            <input type="radio" name="experience-level" value="Beginner" checked={beginnerLevelDB}/>
            <label htmlFor="Beginner">Beginner</label>

            <input type="radio" name="experience-level" value="Intermediate" checked={intermediateLevelDB}/>
            <label htmlFor="Intermediate">Intermediate</label>
            
            <input type="radio" name="experience-level" value="Advanced" checked={advancedLevelDB}/>
            <label htmlFor="Advanced">Advanced</label>

            <button type="submit">Save</button>
        </form>
    )
}