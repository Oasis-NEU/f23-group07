export default function CreateProfile() {
    return (
        <form action="/create-profile/api" method="post">

            <label htmlFor="profile-picture">Profile Picture</label>
            <input type="file" name="pfp" />


            <label >Days Available</label>

            <label htmlFor="monday-available">Monday</label>
            <input type="checkbox" name="monday-available" />

            <label htmlFor="tuesday-available">Tuesday</label>
            <input type="checkbox" name="tuesday-available" />

            <label htmlFor="wednesday-available">Wednesday</label>
            <input type="checkbox" name="wednesday-available" />

            <label htmlFor="thursday-available">Thursday</label>
            <input type="checkbox" name="thursday-available" />

            <label htmlFor="friday-available">Friday</label>
            <input type="checkbox" name="friday-available" />

            <label htmlFor="saturday-available">Saturday</label>
            <input type="checkbox" name="saturday-available" />

            <label htmlFor="sunday-available">Sunday</label>
            <input type="checkbox" name="sunday-available" />


            <label htmlFor="experience-level">Experience Level</label>

            <input type="radio" name="experience-level" value="Beginner" />
            <label htmlFor="Beginner">Beginner</label>

            <input type="radio" name="experience-level" value="Intermediate" />
            <label htmlFor="Intermediate">Intermediate</label>
            
            <input type="radio" name="experience-level" value="Advanced" />
            <label htmlFor="Advanced">Advanced</label>

            <button type="submit">Save</button>
        </form>
    )
}