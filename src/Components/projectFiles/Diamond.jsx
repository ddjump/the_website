import React from 'react';
import '../../CSS/Projects.css';
import diamond from '../../Images/theDiamond.png';
import diamondFilled from '../../Images/filledDiamond.png';

class Diamond extends React.Component {
    constructor(props) {
        super(props);
        this.handClick = this.props.onClick
    }

    render() {
        var icon = null;
        var classname = null;
        if(this.props.clicked === "true") {
            icon = diamondFilled;
            classname = "biggerDiamond";
        } else {
            icon = diamond;
            classname = "";
        }

        return(
            <div onClick={this.handClick.bind(this)}>
                <img src={icon} id="diamond" alt="diamond" className={classname}/>
            </div>
        );
    }
}

export default Diamond;