import './Home.css';
import React from 'react';
import Typewriter from './Typewriter';
import { Link } from 'react-router-dom';

function Home({buttonClick, enterKey}) {

    return (
        <div className="page homepageContainer">
            <div className="homepage">
                <h1 className="homeText">
                    <Typewriter printMessage="My name is Mike," initialPause={0} />
                    <br />
                    <Typewriter printMessage="an aspiring front end developer." initialPause={2000} />
                </h1>
            </div>
        <Link to='/about' style={{ textDecoration: 'none' }} onKeyDown={e => enterKey(e, 'about')}><div className="fadeButton fadeButtonHome bold" onClick={() => buttonClick('about')} aria-label='About Me'> About me &gt; </div></Link>
        </div>
    );
}

export default Home;