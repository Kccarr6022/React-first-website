import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import './index.scss' // import the stylesheet
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUser,
  faProjectDiagram,
  faFile,
  faPhone,
  faBlog,
} from '@fortawesome/free-solid-svg-icons' //import the icons
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={Logo} alt="logo" />
    </Link>
    <nav>
      <NavLink
        end="true"
        activeClassName="active"
        strict to="/"
      >
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        end="true"
        className="resume-link"
        activeClassName="active"
        to="/resume"
      >
        <FontAwesomeIcon icon={faFile} color="#4d4d4e" />
      </NavLink>
      <NavLink
        end="true"
        className="projects-link"
        activeClassName="active"
        to="/projects"
      >
        <FontAwesomeIcon icon={faProjectDiagram} color="#4d4d4e" />
      </NavLink>
      <NavLink
        end="true"
        className="blog-link"
        activeClassName="active"
        to="/blog"
      >
        <FontAwesomeIcon icon={faBlog} color="#4d4d4e" />
      </NavLink>
      <NavLink
        end="true"
        className="contact-link"
        activeClassName="active"
        to="/contact"
      >
        <FontAwesomeIcon icon={faPhone} color="#4d4d4e" />
      </NavLink>
      <NavLink
        end="true"
        className="about-link"
        activeClassName="active"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/kadencarr/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Kccarr6022"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
