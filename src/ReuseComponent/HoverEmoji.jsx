import React from 'react';

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
            <span role='img' aria-label="Close" id="emoji"
                onMouseEnter={this.toggleHoverState.bind(this)} 
                onMouseLeave={this.toggleHoverState.bind(this)}
                >{this.state.isHover? "😱" : "😊"}💻</span>
        );
    }
}

export default HoverEmoji;