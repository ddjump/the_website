import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../Images/arrow.png';
import '../CSS/Resume.css';
import docIcon from '../Images/document.png';
import ResumeDoc from '../Images/Resume.pdf';

class Resume extends React.Component {
    render() {
        return(
            <div>
                <Link to="/"><img alt="arrow" id="arrow" src={ arrow }/></Link>
                <center><h1>Resume</h1></center>
                <IconButton />
                <ProgrammingBox />
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
                <b><p className="title">Programming Language</p></b>
            </div>
        );
    }
} 

class EducationBox extends React.Component {
    render() {
        return(
            <div>
            </div>
        );
    }
}

export default Resume;