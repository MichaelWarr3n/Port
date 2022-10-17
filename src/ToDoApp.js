import React from 'react';
import screenshot from './to-do-app-screenshot.png';

function ToDoApp() {
        
    return (
        <div className="projectPreview">
            <div className="projectScreenshotContainer">
                <img src={screenshot} className="projectScreenshot" alt='To do website screenshot'/>
            </div>
            <div className="projectTextContainer">
                <p className="projectText">This web app was built using the Vue.js library</p>
                <p className="projectText">It will save your tasks and task status for when you return to the website!</p>
            </div>
            <div className="normalButtonContainer">
                <a href="https://michaelwarr3n.github.io/to-do-app/" target="_blank" style={{ textDecoration: 'none' }} className="normalButton projectSiteButton" aria-label='Go to the to do website'><div> Go to site &gt; </div></a>
            </div>
        </div>
    );
}

export default ToDoApp;