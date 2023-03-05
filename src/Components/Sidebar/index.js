import React from "react";
import { Link, NavLink } from "react-router-dom";
import './style.scss';

/////////////////////////////////////

import letM from'../../assets/images/icons8-m-67.png';
// import myname from'../../assets/images/Mig.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser  } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";



const Sidebar =()=>{
    return(
        <div className="nav-bar">
            <Link className="logo" to='/'>
                <img src={letM} alt="My letter"/>
                {/* <img src={myname} className='myname' alt="My name"/> */}
            </Link>
            <nav>
                <NavLink exact='true' activeclassname='active' className='homeLink' to='/'>
                    <FontAwesomeIcon icon={faHome} color='#000'/>
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='aboutLink' to='/about'>
                    <FontAwesomeIcon icon={faUser} color='#000'/>
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='contactLink' to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color='#000'/>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a
                        target="_blank"
                        rel="norefferrer"
                        href="https://www.instagram.com/migzzawy/"
                    >
                        <FontAwesomeIcon icon={faInstagram} color='#000'/>
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="norefferrer"
                        href="https://github.com/MiGzawy"
                    >
                        <FontAwesomeIcon icon={faGithub} color='#000'/>
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="norefferrer"
                        href="https://www.facebook.com/profile.php?id=100009373442290"
                    >
                        <FontAwesomeIcon icon={faFacebook} color='#000'/>
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default Sidebar;