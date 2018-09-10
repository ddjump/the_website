import React, { Component } from 'react';
import './App.css';
import TextBox from './Components/TextBox.jsx';
import { Link } from 'react-router-dom';
import ContactMe from './Components/ContactMe.jsx';

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

    const baseUrl = process.env.PUBLIC_URL;

    return (
      <div style={rootStyle}>
        <TextBox />
        {/* <input id="textField" value={this.state.backgroundColor} onChange={this.changeColor.bind(this)}/> */}
        <Link to={baseUrl + "/aboutme"}><button className="dot">About Me</button></Link>
        <Link to={baseUrl + "/resume"}><button className="resumeButton">Resume</button></Link>
        <Link to={baseUrl + "/projects"}><button id="projects" className="projectsButton"><div id="projectText">Projects</div></button></Link>
        <ContactMe />
      </div>
    );
  }
}

export default App;