import React from 'react';
import '../CSS/AboutMe.css';
// import close from '../Images/close.png';
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
                <div id="boxxx">
               <div id="aboutMeTitle">About Me</div>
                  <div className='popup_inner'>
                    <div className='aboutMeText'>
                        <p><TabSpace />I graduated at <b>Stony Brook University</b> in summer of 2018 with a <b>Computer Science</b> degree. My area of interest lies in <b>Web Development</b>, <b>Mobile Development</b>, and also <b>Data Science</b>. I spent most of my time coding, playing sports(<span role='img' aria-label="Close">🏀 and 🎾</span>), and drawing. Oh! I am also a big fan of Korean Fried Chicken!<span role='img' aria-label="Close">🍗🍗</span></p>
                    </div>
                </div>
                
                <div id="tennis" className="bubble">
                    <span role='img' aria-label="Close">🎾</span>
                </div>
                <div id="friedChicken" className="bubble">
                    <span role='img' aria-label="fried">🐓🍗</span>
                </div>
                <div id="bball" className="bubble">
                    <span role='img' aria-label="bball">🏀</span>
                </div>
                <div id="laptop" className="bubble">
                    <span role='img' aria-label="laptop">💻</span>
                </div>
                <div id="game" className="bubble">
                    <span role='img' aria-label="game">🕹</span>
                </div>
                <div id="tv" className="bubble">
                    <span role='img' aria-label="tv">📺</span>
                </div>

                <div className="popup_inner2">
                    <div className="aboutMeText2">
                        <p>Quote I think about while coding:</p>
                        <p>"You just can't beat the person who never gives up." -Babe Ruth</p>
                    </div>
                </div>
                <div id="exit" onClick={this.props.toggleWindow}>Exit</div> 
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