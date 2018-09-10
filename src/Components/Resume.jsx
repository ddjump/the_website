import React from 'react';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../CSS/Resume.css';
import arrow from '../Images/arrow2.png';
import EducationPanel from './panels/EducationPanel.jsx';
import SkillsPanel from './panels/SkillsPanel.jsx';
import WorkPanel from './panels/WorkPanel.jsx';

class Resume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            optionOpen: false,
            options: ["Education", "Skills", "Work Experience", "Download"],
            optionClicked: ""
        }
    }

    handleClick(i) {
        if(i === 3) {
            window.open("https://drive.google.com/file/d/1PDfljYtzvwuQpC10ukFMsWvK5mDmfoXm/view?usp=sharing", "_blank");
            this.clickBack();
            return;
        }

        if(!this.state.optionOpen) {
            const clicked = this.state.options[i];
            this.setState({optionClicked: clicked, options: [clicked], optionOpen: true});
        } else {
            this.clickBack();
        }
    }

    clickBack() {
        this.setState({options: ["Education", "Skills", "Work Experience", "Download"], optionOpen: false});
        this.setState({optionOpen: false, optionClicked: ""});
    }
 
    render() {

        const panels = this.state.options.map((option, i) => <Panel title={option} key={option} onClick={() => this.handleClick(i)}/>);
        var option = null;
        if(this.state.optionOpen) {
            option = <Option clicked={this.state.optionClicked} appear={this.state.optionOpen}/>
        } else {
            option = null;
        }

        return(
            <div className="resumePage">
                <Link to="/"><img alt="arrow" id="arrow" src={ arrow }/></Link>
                <center><h1 id="resume">Resume</h1></center>
                <div className="container">
                    <ReactCSSTransitionGroup
                        transitionName="example"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}>
                        {panels}
                        {option}
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        );
    }
}

class Panel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            move: this.props.change
        }
        this.handleClick = this.props.onClick;
    }

    render() {
        var styleClass = "";
        if(this.props.title === "Work Experience") {
            styleClass = "Work_Experience";
        } else {
            styleClass = this.props.title;
        }

        return(
            <div id={styleClass} onClick={this.handleClick.bind(this)}>
                <center><p className="title">{this.props.title}</p></center>
            </div>
        );
    }
}

class Option extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            option: this.props.clicked,
            open: this.props.appear
        }
    }

    render() {
        var display = null;
        const option = this.state.option;
        if(this.state.open) {
            switch(option) {
                case 'Education':
                    display = <EducationPanel />;
                    break;
                case 'Skills':
                    display = <SkillsPanel />;
                    break;
                case 'Work Experience':
                    display = <WorkPanel />;
                    break;
                case 'Download':
                    break;
                default:
                    display = null;
            }
        }

        return(
            <div>
                {display}
            </div>
        );
    }
}

export default Resume;