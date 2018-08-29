import React, { Component } from 'react';
import './App.css';
import TextBox from './Components/TextBox.jsx';
import AboutMe from './Components/AboutMe.jsx';
import { Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      backgroundColor : 'white',
      color: 'black'
    };
  }

  changeColor(e) {
    this.setState({
      backgroundColor: e.target.value
    });
  }

  render() {
    var rootStyle = {
      backgroundColor : this.state.backgroundColor,
      color : this.state.color,
      height : '100vh'
    }

    return (
      <div style={rootStyle}>
        <TextBox />
        <input id="textField" value={this.state.backgroundColor} onChange={this.changeColor.bind(this)}/>
        <Link to="/resume"><button className="resumeButton">Resume</button></Link>
        <Link to="/projects"><button id="projects" className="projectsButton"><div id="projectText">Projects</div></button></Link>
        <div className="triContainer">
          <div className="triangle">
            <div className="empty"></div>
          </div>
          <p id="contactTitle">Contact Me</p>
        </div>
        <AboutMe />
      </div>
    );
  }
}

export default App;
