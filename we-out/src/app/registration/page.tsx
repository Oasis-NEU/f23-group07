'use client'

export default function Home() {
  return (
    <div className = "login-box-container">
      <h1 className="absolute top-1/4 text-center text-6xl text-red-with-border">
          NUGym<span className="text-white">.</span>
        </h1>   
      <div className="login-box">
        <form action="/auth/sign-up" method="post">
          <label htmlFor="email">Email</label>
          <input name="email" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
          <button>Sign Up</button>
        </form>
    </div>
    </div>
  )
}