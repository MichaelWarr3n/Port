import './Experience.css';
import React from 'react';
import { Link } from 'react-router-dom';
import southLogo from './south-logo.png';
import gymsharkLogo from './gymshark-logo.png';
import justitLogo from './justit-logo.jpg';
import readingRoomLogo from './reading-room-logo.jpeg'

function Experience({buttonClick, enterKey}) {

    return (
        <div className="page timelinePage">
            <div className="timelineContainer">
                <div className="timelineDotsContainer">
                    <div className="timeline">
                        <div className="timelineDot"></div>
                        <div className="timelineDot"></div>
                        <div className="timelineDot"></div>
                        <div className="timelineDot"></div>
                    </div>
                </div>
                <div className='timelineLinesContainer'>
                    <div className="longLine"></div>
                    <div className="shortLine"></div>
                    <div className="longLine"></div>
                    <div className="shortLine"></div>
                </div>
                <div className="textboxContainer">
                    <div className="firstTimelineSection timelineSection">
                        <img src={southLogo} className="invert timelineIcon" alt='South Bromsgrove High School logo'/>
                        <p className="timelineText">Whilst completing my education at South Bromsgrove Sixth Form, I worked several jobs in the hospitality sector.</p>
                    </div>
                    <div className="secondTimelineSection timelineSection">
                        <img src={gymsharkLogo} className="timelineIcon" alt='Gymshark Logo'/>
                        <p className="timelineText">I landed a job working in the distribution centre, After 1 year I was promoted and began working as a Brand Executive in the head office. In this role, I built up many professional skills and met a lot of inspirational people.</p>        
                    </div>
                    <div className="thirdTimelineSection timelineSection">
                        <img src={justitLogo} className="timelineIcon" alt='Just IT logo'/>
                        <p className="timelineText">Inspired to leave my role at Gymshark, I took some time out traveling in South America before starting a self-funded software development course with Just IT. During this time I developed a strong foundation of front-end development skills.</p>     
                    </div>
                    <div className="fourthTimelineSection timelineSection">
                        <img src={readingRoomLogo} className="timelineIcon" alt='Reading Room logo'/>
                        <p className="timelineText">In November 2021 I started my first junior web developer role with a digital agency called Reading Room. I am enjoying collaborating within a team and continuing to build my skills.</p>
                    </div>
                </div>
                <Link to='/contact' style={{ textDecoration: 'none' }} onKeyDown={e => enterKey(e, 'contact')}><div className="fadeButton fadeButtonExperienceMobile bold" onClick={() => buttonClick('contact')} aria-label='Contact'> Contact me &gt; </div></Link>
            </div>
        </div>
    );
}

export default Experience;