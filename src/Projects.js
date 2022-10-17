import './Projects.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import MemoryGame from './MemoryGame';
import TravelPlanner from './TravelPlanner';
import ToDoApp from './ToDoApp';
import NotsStore from './NotsStore';

function Projects({ buttonClick, enterKey }) {

    const [activeProject, setActiveProject] = useState('memory-game');

    function handleProjectClick(projectName) {
        setActiveProject(projectName);
    };

    const navStyle = { textDecoration: 'none' };

    return (
        <div className="page">
            <Router>
                <div className="projectContainer">
                    <div className="projectSelectors">
                        <Link style={navStyle} onClick={() => handleProjectClick('memory-game')} className={"projectSelector bold " + (activeProject === 'memory-game' ? 'activeProject' : '')} to='/projects/memory-game' aria-label='Select project, memory game'>
                            <p>Memory Game</p>
                        </Link>
                        <Link style={navStyle} onClick={() => handleProjectClick('travel-planner')} className={"projectSelector bold " + (activeProject === 'travel-planner' ? 'activeProject' : '')} to='/projects/travel-planner' aria-label='Select project, travel planner'>
                            <p>Travel Planner</p>
                        </Link>
                        <Link style={navStyle} onClick={() => handleProjectClick('to-do-app')} className={"projectSelector bold " + (activeProject === 'to-do-app' ? 'activeProject' : '')} to='/projects/to-do-app' aria-label='Select project, to do website'>
                            <p>To Do App</p>
                        </Link>
                        <Link style={navStyle} onClick={() => handleProjectClick('nots-store')} className={"projectSelector bold " + (activeProject === 'nots-store' ? 'activeProject' : '')} to='/projects/nots-store' aria-label='Select project, nots e-commerce store'>
                            <p>Nots Store</p>
                        </Link>
                    </div>
                </div>
                <div className="previewContainer">
                    <div className="permanentRoute">
                        <Route render={({location}) => (
                            <TransitionGroup>
                                <CSSTransition timeout={800} classNames='project' key={location.key}>
                                    <Switch location={location}>
                                        <Route path="/projects/memory-game"><MemoryGame /></Route>
                                        <Route path="/projects/travel-planner"><TravelPlanner /></Route>
                                        <Route path="/projects/to-do-app"><ToDoApp /></Route>
                                        <Route path="/projects/nots-store"><NotsStore /></Route>
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>
                        )} />
                    </div>
                </div>
            </Router>
            <div className="projectButtonContainer">
                <Link to='/experience' style={{ textDecoration: 'none' }} onKeyDown={e => enterKey(e, 'experience')}>
                    <div className="fadeButton fadeButtonProject bold" onClick={() => buttonClick('experience')} aria-label='Experience'> My experience &gt; </div>
                </Link>
            </div>
        </div>
    );
}

export default Projects;