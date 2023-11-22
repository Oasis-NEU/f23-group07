'use client'

export default function Home() {
  return (
    <div className="row">
      <div className="col-6">
        <h1 className="header">Register For NUGym</h1>
        <p className="">
          WELCOME TO NUGYM
        </p>
      </div>
      <div className="col-6 auth-widget text-black">
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