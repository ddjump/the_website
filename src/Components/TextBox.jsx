import React from 'react';
import '../CSS/TextBox.css';

class TextBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hover: false
        };
    }

    render() {
        return(
            <div id="text">
                <div className="box wave"><h2><span role='img' aria-label="Close">👋</span></h2></div>Hi! I'm Daniel Yen, a Full Stack Developer who loves to make applications. <HoverEmoji />
            </div>
        );
    }
}

class HoverEmoji extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHover: false
        };
    }

    toggleHoverState() {
        this.setState({
            isHover: !this.state.isHover
        });
    }

    render() {
        return(
            <span role='img' aria-label="Close"
                onMouseEnter={this.toggleHoverState.bind(this)} 
                onMouseLeave={this.toggleHoverState.bind(this)}
                >{this.state.isHover? "😱" : "😊"}💻</span>
        );
    }
}

export default TextBox;