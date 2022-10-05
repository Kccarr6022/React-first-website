import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 5500)
  }, [letterClass])


  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't']} 
              idx = {15} />
        </h1>
        <p>
          Hey I am Kaden Carr. I write software ranging from backend Python, C++, Java and SQL, to
          Front End React, HTML, CSS, and Javascript. I am a student at Florida Gulf Coast University
          as well as a student of life. I am a self taught web developer, designer, and have acquired
          currently over 6 certifications of software and devops and am always looking to pickup new
          skills. I understand that software has to be built well and right the first time, and I am not
          only a developer but a problem solver. I am a team player and love to work with others to achieve
          an end goal. I am a fast learner and am always looking to learn new things. I am a hard worker and
          am always looking to improve myself and my skills.

        </p>
      </div>
    </div>
  )
}

export default About
