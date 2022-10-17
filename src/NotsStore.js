import React from 'react';
import screenshot from './nots-website-screenshot.png';

function NotsStore() {
        
    return (
        <div className="projectPreview">
            <div className="projectScreenshotContainer">
                <img src={screenshot} className="projectScreenshot" alt='Nots store website screenshot'/>
            </div>
            <div className="projectTextContainer">
                <p className="projectText">This web app was built using the Vue.js, Vue Router and Vuex</p>
                <p className="projectText">This is a custom built e-commerce store, using a content management system to make the store scalable</p>
            </div>
            <div className="normalButtonContainer">
                <a href="https://michaelwarr3n.github.io/nots-website/" target="_blank" style={{ textDecoration: 'none' }} className="normalButton projectSiteButton" aria-label='Go to the to do website'><div> Go to site &gt; </div></a>
            </div>
        </div>
    );
}

export default NotsStore;