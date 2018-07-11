import React from 'react';
import '../CSS/AboutMe.css';
import close from '../Images/close.png';
// import profile from '../Images/ProfilePicture.jpg'

class AboutMe extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toggle: false
        }
    }

    toggle() {
        this.setState({
            toggle: !this.state.toggle
        });
    }
    
    render(){
        return(
            <div>
                <button className="dot" onClick={this.toggle.bind(this)}>About Me</button>
                {this.state.toggle ? <AboutMeWindow toggleWindow={this.toggle.bind(this)}/> : null}
            </div>
        );
    }
}

class AboutMeWindow extends React.Component {
    render() {
        return(
            <div className='popup'>
                <div className='popup_inner'>
                    <center><h1>About Me</h1></center>
                    <div className="aboutMeP">
                        <div className='aboutMeText'>
                            <p><TabSpace />I am currently a senior majoring in <b>Computer Science</b> at <b>Stony Brook University</b>. My area of interest lies in <b>Web Development</b>, <b>Mobile Development</b>, and also <b>Data Science</b>. I spent most of my time coding, playing sports(<span role='img' aria-label="Close">🏀 and 🎾</span>), and drawing. Oh! I am also a big fan of Korean Fried Chicken!<span role='img' aria-label="Close">🍗🍗</span></p>
                        </div>
                    </div>
                    <img alt="close" id="closeButton" src={close} onClick={this.props.toggleWindow}/>
                    {/* <img alt="profile" id="profile" src={profile} /> */}
                </div>
            </div>
        );
    }
}

class TabSpace extends React.Component {
    render() {
        return(
            <span className="tabSpace"></span>
        );
    }
}

export default AboutMe;