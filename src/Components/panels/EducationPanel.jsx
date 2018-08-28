import React from 'react';
import '../../CSS/Resume.css';
import '../../CSS/panelsCSS/EducationalPanel.css';
import stonyIcon from '../../Images/stonyBrookIcon.png';
import nccIcon from '../../Images/nccIcon.png';

class EducationPanel extends React.Component{
    render() {
        return(
            <div id="educationPanel">
                <img src={stonyIcon} alt="stony" id="stony"/>
                <b><p id="stonyText">Stony Brook University<br/>B.S. Computer Science</p></b>
                <p id="stonyText2">Location: Stony Brook, NY<br/>Fall 2015 - Summer 2018</p>
                <img src={nccIcon} alt="ncc" id="ncc"/>
                <b><p id="nccText">Nassua Community College<br/>A.S. Computer Science</p></b>
                <p id="nccText2">Location: Garden City, NY<br/>Fall 2013 - Spring 2015</p>
                <div id="coursework">
                    <p id="rc">Relevant Coursework:</p>
                    <table id="courseTable">
                        <tbody>
                        <tr>
                            <td>• Analysis of Algorithms</td>
                            <td>• Computer Networks</td>
                        </tr>
                        <tr>
                            <td>• Internet Programming</td>
                            <td>• Programming in C</td>
                        </tr>
                        <tr>
                            <td>• Theory of Computation</td>
                            <td>• Legal Issues in Info Systems</td>
                        </tr>
                        <tr>
                            <td>• Principles of Database Systems</td>
                            <td>• Programming for Data Science</td>
                        </tr>
                        <tr>
                            <td>• Systems Fundamentals</td>
                            <td>• Technical Communications</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default EducationPanel;