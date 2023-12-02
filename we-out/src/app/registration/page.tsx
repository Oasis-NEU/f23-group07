'use client'

export default function Home() {
  return (
    <div className="login-box-container flex flex-col items-center justify-center space-y-10">
      <h1 className="text-center text-6xl text-red-with-border">
        NUGym<span className="text-white">.</span>
      </h1>   
      <div className="login-box">
        <form action="/auth/sign-up" method="post">
          <label htmlFor="email">Email</label>
          <input 
          name="email" 
          placeholder = "example.northeastern.edu"
          className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
          />
          <label htmlFor="password">Password</label>
          <label htmlFor="password">Password</label>
          <input 
          type="password" 
          name="password"
          placeholder = "supersecretpassword!!"
          className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
           />
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  )
}