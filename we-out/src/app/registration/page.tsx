import AuthForm from './auth-form'

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
        <AuthForm />
      </div>
    </div>
  )
}