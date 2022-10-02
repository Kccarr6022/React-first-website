import { Link } from 'react-router-dom';
import './index.scss';

const Contact = () => {
    return (
        <div className="container contact-page">
            <div className="text-zone">
                <h1> Hi! <br /> call (941) 250- 1194 <br />
                </h1>
                <h2> Frontend Developer/Designer, Devops & Backend </h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Contact