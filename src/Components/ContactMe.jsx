import React from 'react';
import '../CSS/ContactMe.css';
import smallTriangle from '../Images/smallTriangle.png';
import linkedin from '../Images/linkedin.png';
import angel from '../Images/angel.png';
import github from '../Images/contactGithub.png';

class ContactMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
    }

    openContact() {
        this.setState({clicked: true});
    }

    closeContact() {
        this.setState({clicked: false});
    }


    render() {
        return(
            <div>
                {this.state.clicked? <TriangleClicked onClick={() => this.closeContact()}/> : <Triangle onClick={() => this.openContact()}/>}
            </div>
        );
    }
}

class Triangle extends React.Component {
    render() {
        return(
            <div className="triContainer" onClick={() => this.props.onClick()}>
                <div className="triangle">
                    <div className="empty"></div>
                </div>
                <p id="contactTitle">Contact Me</p>
            </div>
        );
    }
}

class TriangleClicked extends React.Component {
    render() {
        return(
            <div>
                <div className="triClickedContainer" onClick={() => this.props.onClick()}>
                    <div className="triangleClicked"/>
                </div>
                <div id="emailContact"><p>dyen576@gmail.com</p></div>
                <div id="contactBar">
                    <div id="insideOne" onClick={()=> window.open("https://linkedin.com/in/dyen3", "_blank")}>
                        <img src={smallTriangle} id="smallTriangle1" alt="triangle"/>
                        <img src={linkedin} id="linkedin" alt="linkedin"/>
                    </div>
                    <div id="insideOne" onClick={()=> window.open("https://angel.co/daniel-yen-2", "_blank")}>
                        <img src={smallTriangle} id="smallTriangle2" alt="triangle" className="two"/>
                        <img src={angel} id="angel" alt="angel"/>
                    </div>
                    <div id="insideOne" onClick={()=> window.open("https://github.com/ddjump", "_blank")}>
                        <img src={smallTriangle} id="smallTriangle3" alt="triangle" className="three"/>
                        <img src={github} id="contactGithub" alt="github"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactMe;