import React from 'react';
import '../CSS/ReuseComponent.css';

class Circle extends React.Component {
    render() {
        var circleStyle = {
            background: this.props.color
        }

        return(
            <div>
                <div className="circle" style={circleStyle}></div>
            </div>
        );
    }
}

export default Circle;