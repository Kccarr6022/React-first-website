import './index.scss'
import Portrait from '../../../assets/images/image.png'

const Logo = () => {
  return (
    <div className="logo">
      <img src={Portrait} alt="portrait" />
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="svg-container" transform="translate(0, 0)" fill="none">
          <path d="M 0 0 L 100 0 L 100 100 L 0 100 Z" fill="#000000" />
        </g>
      </svg>
    </div>
  )
}

export default Logo
