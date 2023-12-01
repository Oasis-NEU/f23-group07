import Link from 'next/link';

export default function Login() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // Full viewport height
    background: '#f3f3f3' // Background color
  };

  const loginBoxStyle = {
    width: '300px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    background: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ddd',
    borderRadius: '4px',
    color: 'black'
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    background: '#007bff',
    color: 'white',
    cursor: 'pointer',
    marginTop: '10px'
  };

  const linkStyle = {
    display: 'block',
    textAlign: 'center',
    marginTop: '20px',
    color: '#007bff',
    textDecoration: 'none'
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ textAlign: 'center', color: 'red', fontSize: '3rem', marginBottom: '20px' }}>
        NUGym<span style={{ color: 'white' }}>.</span>
      </h1>   
      <div style={loginBoxStyle}>
        <form action="/auth/login" method="post">
          <label htmlFor="email">Email</label>
          <input style={inputStyle} name="email" />

          <label htmlFor="password">Password</label>
          <input style={inputStyle} type="password" name="password" />

          <button style={buttonStyle}>Sign In</button>
          <Link href="/registration" style={linkStyle}>
          Sign Up
        </Link>
        </form>
      </div>
    </div>
  )
}
