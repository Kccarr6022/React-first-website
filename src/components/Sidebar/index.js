import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo.png'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faRProject } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logo" />
    </Link>
    <nav>
      <NavLink
        exact="true"
        activeclassname="active"
        className="home-link"
        to="/"
      >
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        className="about-link"
        activeclassname="active"
        to="/about"
      >
        <FontAwesomeIcon icon="fa-regular fa-diagram-project" color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        className="about-link"
        activeclassname="active"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
    </nav>
  </div>
)

export default Sidebar
