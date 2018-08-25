import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../Images/arrow.png';
import '../CSS/OldResume.css';
import docIcon from '../Images/docIcon.png';
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
    render() {
        return(
            <div id="mainResume">
                <div id="container">
                    <Link to="/"><img alt="arrow" id="arrow" src={ arrow }/></Link>
                    {/* <center><h1 id="resumeTitle">Resume</h1></center> */}
                    <center><IconButton /></center>
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
                <button class='btn'><img alt="doc" id="doc" src={ docIcon } href={ResumeDoc} target="_blank"/>Resume</button>
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
                        <td><SkillBar image={javaIcon} lang="Java" skillLevel="5" color="#F83800" id="one"/></td>
                        <td><SkillBar image={javaScriptIcon} lang="Javascript" skillLevel="4" color="#F83800"/></td>
                    </tr>
                    <tr>
                        <td><SkillBar image={pythonIcon} lang="Python" skillLevel="4" color="#F83800"/></td>
                        <td><SkillBar image={swiftIcon} lang="Swift" skillLevel="3" color="#F83800"/></td>
                    </tr>
                    <tr>
                        <td><SkillBar image={htmlIcon} lang="HTML" skillLevel="4" color="royalblue"/></td>
                        <td> <SkillBar image={cssIcon} lang="CSS" skillLevel="4" color="royalblue"/></td>
                    </tr>
                    <tr>
                        <td><SkillBar image={reactIcon} lang="React.js" skillLevel="4" color="royalblue"/></td>
                        <td><SkillBar image={nodejsIcon} lang="Node.js" skillLevel="3" color="lightgreen"/></td>
                    </tr>
                    <tr>
                        <td><SkillBar image={mysqlIcon} lang="mySQL" skillLevel="4" color="lightgreen"/></td>
                        <td><SkillBar image={graphqlIcon} lang="GraphQL" skillLevel="4" color="lightgreen"/></td>
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
                <p className="schoolTitle">Stony Brook University<br/>B.S. Computer Science</p>
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
                <div className="expBox">
                    <div>
                        <p><b>DigitalSwitchNY</b><div id="date">Jan	2017	– Oct	2017</div></p>
                        <p>iOS Developer</p>
                        <p id="small">• Worked	with the iOS development team	to	produce	an	E-Commerce	app	for	Gb’s	Sneakers</p>
                        <p id="small">• The	app	is connected	to	a	Shopify	website	and	utilizes	Mobile	SDK	Buy,	which	uses	GraphQL.</p>
                        <p id="small">• All	user	information	is	managed	by	Firebase,	and	take	advantage	of	their	real-time	database.</p>
                        <p id="small">• Maintained	E-Commerce	system	and	also	added	an	award	system	by	using	QR	code.</p> 
                    </div>
                    <br />
                    <div>
                        <p><b>Stony Brook University</b><div id="date">June	2017	– Sept	2017</div></p>
                        <p>iOS Developer</p>
                        <p id="small">• Researched	with	colleagues	on	an	iOS	app	called	Code	Blue,	under	Dr. Paul	Fodor.</p>
                        <p id="small">• The	main	purpose	of	the	app	is	to	record	data	of	a	patient	undergoing	cardiac	arrest.</p>
                        <p id="small">• Improved	recommendation	system	to	mimic	the	exact	operation	step	by	step.</p>
                    </div>
                    <br />
                    <div>
                        <p><b> A	Finer	You</b><div id="date">June	2016	– Aug	2016</div></p>
                        <p>Assistant	Technician</p>
                        <p id="small">• An	informational	website	of	a	medical	clinic,	located	in	Great	Neck,	New	York.</p>
                        <p id="small">• Cooperated	in	the	design	and	development	of	the	website.</p>
                        <p id="small">• Created	documents	and	forms	for	medical	practices	and	assisted	the	doctor	with daily	activities.</p>
                    </div>
                    <br />
                    <div>
                        <p><b>99 cent and Great Imports</b><div id="date">Feb	2013	– May	2016</div></p>
                        <p>Cashier/Other</p>
                        <p id="small">• Worked on cashier and also lottery machine.</p>
                        <p id="small">• Experience with basic skills of a retail store, which includes cleaning and product management.</p>
                    </div>
                    <br />
                    <div>
                        <p><b>Sonic Drivein</b><div id="date">June	2015	– Jan	2016</div></p>
                        <p>Drinks/Ice Cream</p>
                        <p id="small">• Memorize all favors and ingredients by heart.</p>
                        <p id="small">• Need to produce shakes/drinks/ice cream as quick as possible.</p>
                    </div>
                    <br />
                    <div>
                        <p><b>Nassau Community College</b><div id="date">Feb	2015	– May	2015</div></p>
                        <p>Lab Assistant</p>
                        <p id="small">• Helped out Professor set up equipment for lab sessions and lectures.</p>
                        <p id="small">• Handled paper work for lab and storage.</p>
                    </div>
                    <br />
                    <div>
                        <p><b>Home Goods</b><div id="date">Jul 2013	– Oct	2013</div></p>
                        <p>Stock Room</p>
                        <p id="small">• Learned a great deal of how to manage every task in a fast pace environment.</p>
                        <p id="small">• Organized items and making sure the store is neat.</p>
                        <p id="small">• Done heavy lifting of furniture and in addition customer service.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;