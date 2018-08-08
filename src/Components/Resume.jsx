import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../Images/arrow.png';
import '../CSS/Resume.css';
import docIcon from '../Images/document.png';
import ResumeDoc from '../Images/Resume.pdf';
import stonyIcon from '../Images/stonyBrookIcon.png';
import SkillBar from '../ReuseComponent/SkillBar.jsx';
import javaIcon from '../Images/javaIcon.png';
import javaScriptIcon from '../Images/javascriptIcon.png';
import pythonIcon from '../Images/pythonIcon.png';
import swiftIcon from '../Images/swiftIcon.png';
import htmlIcon from '../Images/htmlIcon.png';
import cssIcon from '../Images/cssIcon.png';
import reactIcon from '../Images/reactIcon.png';
import nodejsIcon from '../Images/nodejsIcon.png';
import mysqlIcon from '../Images/mysqlIcon.png';
import graphqlIcon from '../Images/graphqlIcon.svg';

class Resume extends React.Component {
    // componentDidMount() {
    //     window.scrollTo(0, 100)
    //   }

    render() {
        return(
            <div id="mainResume">
                <div id="container">
                    <Link to="/"><img alt="arrow" id="arrow" src={ arrow }/></Link>
                    <center><h1 id="resumeTitle">Resume</h1></center>
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
                <table className="programmingSkill">
                    <tr>
                        <td><SkillBar image={javaIcon} lang="Java" skillLevel="88"/></td>
                        <td><SkillBar image={javaScriptIcon} lang="Javascript" skillLevel="88"/></td>
                    </tr>
                    <tr>
                        <td><SkillBar image={pythonIcon} lang="Python" skillLevel="88"/></td>
                        <td><SkillBar image={swiftIcon} lang="Swift" skillLevel="88"/></td>
                    </tr>
                    <tr>
                        <td><SkillBar image={htmlIcon} lang="HTML" skillLevel="88" id="last"/></td>
                        <td> <SkillBar image={cssIcon} lang="CSS" skillLevel="88"/></td>
                    </tr>
                    <tr>
                        <td><SkillBar image={reactIcon} lang="React.js" skillLevel="88"/></td>
                        <td><SkillBar image={nodejsIcon} lang="Node.js" skillLevel="88"/></td>
                    </tr>
                    <tr>
                        <td><SkillBar image={mysqlIcon} lang="mySQL" skillLevel="88"/></td>
                        <td><SkillBar image={graphqlIcon} lang="GraphQL" skillLevel="88"/></td>
                    </tr>
                </table>
                <center><b><p id="otherSkills">Other Skills: Git, JQuery, Spring Boot, JSP, JUnit</p></b></center>
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