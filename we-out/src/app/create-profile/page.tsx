export default function CreateProfile() {
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
      <form action="/create-profile/api" method="post" style={formStyle}>

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
