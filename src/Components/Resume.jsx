import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../Images/arrow.png';
import '../CSS/Resume.css';
import docIcon from '../Images/document.png';
import ResumeDoc from '../Images/Resume.pdf';
import stonyIcon from '../Images/stonyBrookIcon.png';

class Resume extends React.Component {
    // componentDidMount() {
    //     window.scrollTo(0, 100)
    //   }

    render() {
        return(
            <div id="mainResume">
                <div id="container">
                    <Link to="/"><img alt="arrow" id="arrow" src={ arrow }/></Link>
                    <center><h1>Resume</h1></center>
                    <IconButton />
                    <ProgrammingBox />
                    <EducationBox />
                    <WorkExperience />
                </div>
            </div>
        );
    }
}

class IconButton extends React.Component {
    render() {
        return(
            <div>
                <button class='btn'><img alt="doc" id="doc" src={ docIcon } href={ResumeDoc} target="_blank"/>View Document</button>
            </div>
        );
    }
}

class ProgrammingBox extends React.Component {
    render() {
        return(
            <div className="programmingBox">
                <b><p className="title">Languages and Frameworks</p></b>
            </div>
        );
    }
} 

class EducationBox extends React.Component {
    render() {
        return(
            <div className="educationBox">
                <b><p className="eduTitle">Education</p></b>
                <img src={stonyIcon} alt="stony" id="stony"/>
                <p className="schoolTitle"><i>Stony Brook University</i><br/>B.S. Computer Science</p>
                <p className="schoolTitle2">Location: Stony Brook, NY<br/>Expected Graduation:	Summer 2018</p>
                <button id="schoolCourseWork">Course Work</button>
            </div>
        );
    }
}

class WorkExperience extends React.Component {
    render() {
        return(
            <div className="workBox">
                <b><p className="workTitle">Work Experience</p></b>
            </div>
        );
    }
}

export default Resume;