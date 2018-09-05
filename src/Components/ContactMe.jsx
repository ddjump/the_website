import React from 'react';
import '../CSS/ContactMe.css';
import smallTriangle from '../Images/smallTriangle.png';

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
        console.log(this.state.clicked + "RENDER")
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
                    <img src={smallTriangle} id="smallTriangle" alt="triangle" />
                    <img src={smallTriangle} id="smallTriangle2" alt="triangle" />
                    <img src={smallTriangle} id="smallTriangle" alt="triangle" />
                    <img src={smallTriangle} id="smallTriangle2" alt="triangle" />
                    <img src={smallTriangle} id="smallTriangle" alt="triangle" />
                </div>
                {/* <img src={smallTriangle} id="smallTriangle" alt="triangle" /> */}
            </div>
        );
    }
}

export default ContactMe;