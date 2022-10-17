import './About.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Pdf from './MJW-CV.pdf';

function About({buttonClick, enterKey}) {

    return (
        <div className="page aboutPage">
            <div className="imageContainer"></div>
            <div className="aboutTextContainer">
                <span className="aboutTextSection">
                    <p className="aboutText">I have always had a spark for problem-solving and a curiosity for computer technology, taking a screwdriver to PC towers and laptops to see how they work from a young age. Recently, I completed a part-time software developer course, learning the foundational skills to be a front-end web developer.
                        I love using the React framework, it brings together the logic of javascript with the styling of HTML and CSS in a clean way. I learned a lot of soft skills from my most recent role at Gymshark, developing strong communication skills liaising with departments throughout the business and sponsored social media affiliates. 
                        I also developed strong organisational and timekeeping skills working in a fast-paced professional environment. I'm delighted to be starting a new career I am passionate about, and look forward to developing my skills further.
                    </p>
                    <div className="aboutButtonContainer">
                        <a href={Pdf} target='_blank' style={{ textDecoration: 'none' }}><div className="fadeButton fadeButtonAboutCv bold">CV</div></a>
                        <Link to='/skills' style={{ textDecoration: 'none' }} onKeyDown={e => enterKey(e, 'skills')}><div className="fadeButton fadeButtonAbout bold" onClick={() => buttonClick('skills')} aria-label='My Skills'> My skills &gt; </div></Link>
                    </div>
                </span>
            </div>
        </div>
    );
}

export default About;