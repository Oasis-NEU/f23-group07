import Link from 'next/link'

export default function Login() {
  return (
    <div className = "login-box-container">
      <h1 className="absolute top-1/4 text-center text-6xl text-red-with-border">
          NUGym<span className="text-white">.</span>
      </h1>   
    <div className = "login-box">
      <form action="/auth/login" method="post">
      <label htmlFor="email">Email</label>
      <input name="email" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" />
      <button>Sign In</button>
      <Link href="/registration">Sign Up</Link>
      </form>
    </div>
    </div>
  )
}