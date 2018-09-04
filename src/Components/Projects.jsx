import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Projects.css';
import arrowRed from '../Images/arrowRed.png';
import github from '../Images/github.png';
import Diamond from './projectFiles/Diamond.jsx';
import Display from './projectFiles/Display.jsx';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: null,
            projects: [0, 1, 2, 3, 4, 5]
        }
    }

    handleClick(i) {
        if(this.state.clicked === i) {
            this.setState({ clicked: null});
        } else {
            this.setState({ clicked: i});
        }
    }

    render() {
        var clicked = this.state.clicked;

        var diamonds = this.state.projects.map((i) => {
            if(clicked === i) {
                return <Diamond clicked="true" onClick={() => this.handleClick(i)} key={i}/>;
            } else {
                return <Diamond clicked="false" onClick={() => this.handleClick(i)} key={i}/>;
            }
        });


        return(
            <div>
                <Link to="/"><img alt="arrowRed" id="arrowRed" src={ arrowRed }/></Link>
                <center><p id="projectsTitle">Projects</p></center>
                <img alt="github" id="github" src={ github } onClick={()=> window.open("https://github.com/ddjump", "_blank")}/>
                <div id="optionProjects">
                    {diamonds}
                </div>
                {this.state.clicked !== null ? <Display choice={this.state.clicked}/> : null}
            </div>
        );
    }
}

export default Projects;