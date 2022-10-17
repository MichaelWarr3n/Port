import React from 'react';
import screenshot from './memory-game-screenshot.png';

function MemoryGame() {
        
    return (
        <div className="projectPreview">
            <div className="projectScreenshotContainer">
                <img src={screenshot} className="projectScreenshot" alt='Memory game website screenshot'/>
            </div>
            <div className="projectTextContainer">
                <p className="projectText">This game was built using HTML, CSS and vanilla JavaScript.</p>
                <p className="projectText">It is mobile responsive and fully accessable for screen readers</p>
            </div>
            <div className="normalButtonContainer">
                <a href="https://michaelwarr3n.github.io/Memory-Game/" target="_blank" style={{ textDecoration: 'none' }} className="normalButton projectSiteButton" aria-label='Go to memory game website'><div> Go to site &gt; </div></a>
            </div>
        </div>
    );
}

export default MemoryGame;