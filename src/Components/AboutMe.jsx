import React from 'react';
import '../CSS/AboutMe.css';
import Tennis from './bubble/Tennis.jsx';
import Game from './bubble/Game.jsx';
import BBall from './bubble/BBall.jsx';
import Laptop from './bubble/Laptop.jsx';
import Fried from './bubble/Fried.jsx';
import TV from './bubble/TV.jsx';
import { Link } from 'react-router-dom';
import Dan from '../Images/danYen.jpg'

class AboutMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            whichHover: ""
        }
    }

    handleHoverNone() {
        this.setState({ whichHover: ""});
    }

    handleHoverT() {
        this.setState({ whichHover: "tennis" });
    }

    handleHoverF() {
        this.setState({ whichHover: "fried" });
    }

    handleHoverB() {
        this.setState({ whichHover: "bball" });
    }
    
    handleHoverL() {
        this.setState({ whichHover: "laptop" });
    }

    handleHoverG() {
        this.setState({ whichHover: "game" });
    }

    handleHoverTV() {
        this.setState({ whichHover: "tv" });
    }

    render() {
        return(
            <div className='popup'>
                    <div id="boxxx">
                        <div id="aboutMeTitle">About Me</div>
                        <div className='popup_inner'>
                            <div className='aboutMeText'>
                                <p>I graduated at <b>Stony Brook University</b> in summer of 2018 with a <b>Computer Science</b> degree. My area of interest lies in <b>Web Development</b>, <b>Mobile Development</b>, and also <b>Data Science</b>. I spent most of my time coding, playing sports(<span role='img' aria-label="Close">🏀 and 🎾</span>), and drawing. Oh! I am also a big fan of Korean Fried Chicken!<span role='img' aria-label="Close">🍗🍗</span></p>
                            </div>
                        </div>
                        
                        <div id="tennis" className="bubble" onMouseOver={() => this.handleHoverT()} onMouseLeave={() => this.handleHoverNone()}>
                            <span role='img' aria-label="Close">🎾</span>
                        </div>
                        <div id="friedChicken" className="bubble" onMouseOver={() => this.handleHoverF()} onMouseLeave={() => this.handleHoverNone()}>
                            <span role='img' aria-label="fried">🐓🍗</span>
                        </div>
                        <div id="bball" className="bubble" onMouseOver={() => this.handleHoverB()} onMouseLeave={() => this.handleHoverNone()}>
                            <span role='img' aria-label="bball">🏀</span>
                        </div>
                        <div id="laptop" className="bubble" onMouseOver={() => this.handleHoverL()} onMouseLeave={() => this.handleHoverNone()}>
                            <span role='img' aria-label="laptop">💻</span>
                        </div>
                        <div id="game" className="bubble" onMouseOver={() => this.handleHoverG()} onMouseLeave={() => this.handleHoverNone()}>
                            <span role='img' aria-label="game">🕹</span>
                        </div>
                        <div id="tv" className="bubble" onMouseOver={() => this.handleHoverTV()} onMouseLeave={() => this.handleHoverNone()}>
                            <span role='img' aria-label="tv">📺</span>
                        </div>

                        {this.state.whichHover === "" ? "" : <HoverBubble choice={this.state.whichHover}/>}

                        <div className="popup_inner2">
                            <center>
                                <img src={Dan} alt="Dan" id="dan"></img>
                                <div id="quote">
                                    <p><b>Quote I think about while coding:</b></p>
                                    <p>"You just can't beat the person who </p>
                                    <p>never gives up."  -Babe Ruth</p>
                                </div>
                                </center>
                            </div>
                        <Link to="/"><div id="exit" >Exit</div> </Link>
                    </div>
            </div>
        );
    }
}

class HoverBubble extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choice: this.props.choice
        }
    }

    render() {
        var side = "";
        var view = null;
        var which = this.state.choice;
        if(which=== "tennis" || which === "bball" || which === "game") {
            side = "hoverTwo";
            if(which === "tennis") {
                view = <Tennis />;
            } else if(which === "game") {
                view = <Game />;
            } else if(which === "bball") {
                view = <BBall />;
            }
        } else {
            side = "hoverOne";
            if(which === "laptop") {
                view = <Laptop />;
            } else if(which === "fried") {
                view = <Fried />;
            } else if(which === "tv") {
                view = <TV />;
            }
        }

        return(
            <div id={side}>
                {view}
            </div>
        );
    }
}

export default AboutMe;