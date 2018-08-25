import React from 'react';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../CSS/Resume.css';
import arrow from '../Images/arrow2.png';
import IconButton from '../ReuseComponent/IconButton.jsx';

class Resume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            optionOpen: false,
            options: ["Education", "Skills", "Work Experience", "Personal"],
            optionClicked: ""
        }
    }

    handleClick(i) {
        if(!this.state.optionOpen) {
            // const array = this.state.options;
            const clicked = this.state.options[i];
            this.setState({optionClicked: clicked, options: [clicked], optionOpen: true});
            console.log(this.state.optionClicked);
        } else {
            console.log("im on else")
            this.clickBack();
        }
    }

    clickBack() {
        this.setState({options: ["Education", "Skills", "Work Experience", "Personal"], optionOpen: false});
    }
 
    render() {
        const panels = this.state.options.map((option, i) => <Panel title={option} key={option} onClick={() => this.handleClick(i)}/>);
        return(
            <div className="resumePage">
                <Link to="/"><img alt="arrow" id="arrow" src={ arrow }/></Link>
                <center><IconButton /></center>
                <div className="container">
                    <ReactCSSTransitionGroup
                        transitionName="example"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}>
                        {panels}
                    </ReactCSSTransitionGroup>
                </div>
                <button onClick={this.clickBack.bind(this)}>click me</button>
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

export default Resume;