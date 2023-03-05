import React, { useState , useEffect } from "react";
import './style.scss';
import myLogo from '../../assets/images/icons8-m-67 (1).png'
import { Link } from "react-router-dom";
import AnimatedLetters from '../AnimatedLetters';
import Logo from "./Logo";
const Home =()=>{
    const [letterClass , setLetterClass]= useState('text-animate')
    const nameArray=['.','m','a','g','d','y'];
    const jobArray=['W','e','b','','D','e','v','e','l','o','p','e','r','.']
    
    useEffect(() => {
        let timeout;
      
        timeout = setTimeout(() => {
          setLetterClass("text-animate-hover");
        }, 4000);
      
        return () => {
          clearTimeout(timeout);
        };
      }, []);

    return(
        <div className="container homePage">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                <br/>
                <span className={`${letterClass} _13`}>I'</span>
                    <span className={`${letterClass} _14`}>m</span>
                <img src={myLogo} alt='developer'/>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}
                />
                
                <br/>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={jobArray}
                    idx={22}
                />
                </h1>
                <h2>
                    Fullstack & JavaScript Developer
                </h2>
                <Link to="/contact" className='flat-button'>Contact Me</Link>
            </div>
            <Logo/>
        </div>
    )
}
export default Home ;