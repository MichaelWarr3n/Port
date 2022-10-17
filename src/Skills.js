import './Skills.css';
import React from 'react';
import html from './html5.png';
import css from './css-3.png';
import js from './js-file.png';
import reactIcon from './react.png';
import vueIcon from './vue.png';
import drupalIcon from './drupal.png';
import { Link } from 'react-router-dom';

function Skills({buttonClick, enterKey}) {

    return (
        <div className="page skillPage">
            <div className="skillIcons">
                <span className="skillIconLabel">
                    <img src={html} className="invert skillIcon" alt="HTML Logo"/>
                    <p className="skillLabel bold">HTML5</p>
                </span>
                <span className="skillIconLabel">
                    <img src={css} className="invert skillIcon" alt='CSS Logo'/>
                    <p className="skillLabel bold">CSS3</p>
                </span>
                <span className="skillIconLabel">
                    <img src={js} className="skillIcon" alt='JavaScript Logo'/>
                    <p className="skillLabel bold">JavaScript</p>
                </span>
                <span className="skillIconLabel">
                    <img src={reactIcon} className="skillIcon" alt='React.js Logo'/>
                    <p className="skillLabel bold">React.js</p>
                </span>
                <span className="skillIconLabel">
                    <img src={vueIcon} className="skillIcon" alt='Vue.js Logo'/>
                    <p className="skillLabel bold">Vue.js</p>
                </span>
                <span className="skillIconLabel">
                    <img src={drupalIcon} className="skillIcon" alt='Drupal Logo'/>
                    <p className="skillLabel bold">Drupal</p>
                </span>
            </div>
            <Link to='/projects/memory-game' style={{ textDecoration: 'none' }} onKeyDown={e => enterKey(e, 'projects')}>
                <div className="fadeButton fadeButtonSkills bold" onClick={() => buttonClick('projects')} aria-label='Projects'> Projects &gt; </div>
            </Link>
        </div>
    );
}

export default Skills;