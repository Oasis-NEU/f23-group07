import marino from '../../assets/learnmore.jpeg'
import Link from 'next/link'

export default function LearnMore() {

  return (

    <div 
      className="relative flex items-center justify-center h-screen bg-cover bg-no-repeat bg-center" 
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.9)), url(${marino.src})`
      }}
    >
      <h1
        className="absolute top-1/4 text-center text-6xl text-red-with-border" style = {{color: 'red'}}> 
        Contact NUgym
      </h1>
      <div>
        <div className="text-box">
          Email <u>help@nugym.com</u> with questions.
        </div>
      </div>
    </div>

  );
}