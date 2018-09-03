import React from 'react';
import '../../CSS/Projects.css';
import diamond from '../../Images/diamond.png';
import diamondFilled from '../../Images/diamondFilled.png';

class Diamond extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: this.props.clicked
        }
        this.handClick = this.props.onClick
    }

    render() {
        var icon = null;
        if(this.state.clicked === "true") {
            icon = diamondFilled;
        } else {
            icon = diamond;
        }

        return(
            <div onClick={this.handClick.bind(this)}>
                <img src={icon} id="diamond" alt="diamond"/>
            </div>
        );
    }
}

export default Diamond;