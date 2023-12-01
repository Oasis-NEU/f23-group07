export default function CreateProfile() {
    return (
        <form action="/create-profile/api" method="post">

            <label className="ml-9 mt-8" style={{color: 'black'}} htmlFor="profile-picture">Profile Picture</label>
            <input className="ml-8" style={{width: '50%'}} type="file" name="profile-picture" />


            <label className="ml-9 mt-8" style={{color: 'black'}} >Days Available</label>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <label className="ml-12 mt-2" style={{ color: 'black'}} htmlFor="monday-available">Monday</label>
                <input type="checkbox" name="monday-available" />
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <label className="ml-12 mt-2" style={{color: 'black'}} htmlFor="tuesday-available">Tuesday</label>
                <input type="checkbox" name="tuesday-available" />
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <label className="ml-12 mt-2" style={{color: 'black'}} htmlFor="wednesday-available">Wednesday</label>
                <input type="checkbox" name="wednesday-available" />
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <label className="ml-12 mt-2" style={{color: 'black'}} htmlFor="thursday-available">Thursday</label>
                <input type="checkbox" name="thursday-available" />
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <label className="ml-12 mt-2" style={{color: 'black'}} htmlFor="friday-available">Friday</label>
                <input type="checkbox" name="friday-available" />
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <label className="ml-12 mt-2" style={{color: 'black'}} htmlFor="saturday-available">Saturday</label>
                <input type="checkbox" name="saturday-available" />
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <label className="ml-12 mt-2" style={{color: 'black'}} htmlFor="sunday-available">Sunday</label>
                <input type="checkbox" name="sunday-available" />
            </div>


            <label className="ml-9 mt-8" style={{color: 'black'}} htmlFor="experience-level">Experience Level</label>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <label className="ml-12 mt-2" style={{color: 'black'}} htmlFor="Beginner">Beginner</label>
                <input type="radio" name="experience-level" value="Beginner" />
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <label className="ml-12 mt-2" style={{color: 'black'}} htmlFor="Intermediate">Intermediate</label>
                <input type="radio" name="experience-level" value="Intermediate" />
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <label className="ml-12 mt-2" style={{color: 'black'}} htmlFor="Advanced">Advanced</label>
                <input type="radio" name="experience-level" value="Advanced" />
            </div>

            <button style={{backgroundColor: 'black'}} className="ml-12 mt-8" type="submit">Save</button>
        </form>
    )
}