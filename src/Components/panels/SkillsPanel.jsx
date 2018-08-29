import React from 'react';
import '../../CSS/panelsCSS/SkillsPanel.css';
import SkillBar from '../../ReuseComponent/SkillBar.jsx';
import javaIcon from '../../Images/javaIcon.png';
import javaScriptIcon from '../../Images/javascriptIcon.png';
import pythonIcon from '../../Images/pythonIcon.png';
import swiftIcon from '../../Images/swiftIcon.png';
import htmlIcon from '../../Images/htmlIcon.png';
import cssIcon from '../../Images/cssIcon.png';
import reactIcon from '../../Images/reactIcon.png';
import nodejsIcon from '../../Images/nodejsIcon.png';
import mysqlIcon from '../../Images/mysqlIcon.png';
import graphqlIcon from '../../Images/graphqlIcon.svg';

class SkillsPanel extends React.Component {
    render() {
        return(
            <div id="skillsPanel">
                <p id="title">Programming Languages & Frameworks</p>
                <table className="programmingSkill">
                    <tbody>
                        <tr>
                            <td><SkillBar image={javaIcon} lang="Java" skillLevel="5" color="#F83800"/></td>
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
                    </tbody>
                </table>
                <center><b><p id="otherSkills">Other Skills: Git, JQuery, Spring Boot, JSP, JUnit</p></b></center>
            </div>
        );
    }
}

export default SkillsPanel;