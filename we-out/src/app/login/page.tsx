import Link from 'next/link'

export default function Login() {
  return (
    <form action="/auth/login" method="post">
      <label htmlFor="email">Email</label>
      <input name="email" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" />
      <button>Sign In</button>
      <Link href="/registration">Sign Up</Link>
    </form>
  )
}