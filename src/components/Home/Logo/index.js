import './index.scss'
import Portrait from '../../../assets/images/image.png'

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="solid-logo" src={Portrait} alt="logo" />
      <svg
        width="559pt"
        height="559pt"
        version="1.0"
        viewBox="0 0 559.000000 559.000000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0.000000,0.000000) scale(0.100000,-0.100000)"
          fill="none"
        ></g>
      </svg>
    </div>
  )
}

export default Logo
