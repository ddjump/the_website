import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Resume.css';
import arrow from '../Images/arrow2.png';
import docIcon from '../Images/docIcon.png';

class Resume extends React.Component {
    render() {
        return(
            <div className="resumePage">
                <Link to="/"><img alt="arrow" id="arrow" src={ arrow }/></Link>
                <center><IconButton /></center>
                <div className="container">
                    <EducationPanel />
                    <SkillPanel />
                    <WorkPanel />
                    <PersonalPanel />
                </div>
            </div>
        );
    }
}

class IconButton extends React.Component {
    render() {
        return(
            <div>
                <button class='btn'><img alt="doc" id="doc" src={ docIcon }/>Resume</button>
            </div>
        );
    }
}

class EducationPanel extends React.Component {
    render() {
        return(
            <div className="eduPanel">
                <center><p id="title">Education</p></center>
            </div>
        );
    }
}

class SkillPanel extends React.Component {
    render() {
        return(
            <div className="skillPanel">
                <center><p id="title">Skills</p></center>
            </div>
        );
    }
}

class WorkPanel extends React.Component {
    render() {
        return(
            <div className="workPanel">
                <center><p id="title">Work Experience</p></center>
            </div>
        );
    }
}

class PersonalPanel extends React.Component {
    render() {
        return(
            <div className="personalPanel">
                <center><p id="title">Personal</p></center>
            </div>
        );
    }
}

export default Resume;