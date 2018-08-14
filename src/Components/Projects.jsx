import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../Images/arrow.png';

class Projects extends React.Component {
    render() {
        return(
            <div>
                <Link to="/"><img alt="arrow" id="arrow" src={ arrow }/></Link>
                <h1>Projects</h1>
            </div>
        );
    }
}

export default Projects;