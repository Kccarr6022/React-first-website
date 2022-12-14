import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Logo from './Logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['K', 'a', 'd', 'e', 'n', ' ', 'C', 'a', 'r', 'r']
  const jobArray = [
    ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e'],
    ['E', 'n', 'g', 'i', 'n', 'e', 'e', 'r', 'i', 'n', 'g'],
  ]

  const position = ['S', 't', 'u', 'd', 'e', 'n', 't', '.']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 5500)
  }, [letterClass])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>I,</span>
            <span> </span>
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <br></br>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <span className={`${letterClass} _26`}></span>
            <span className={`${letterClass} _27`}>a</span>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray[0]}
              idx={28}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray[1]}
              idx={36}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={position}
              idx={47}
            />
          </h1>
          <h2> Frontend Developer/Designer, Devops & Backend </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
    </>
  )
}

export default Home