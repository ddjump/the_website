import React from 'react';

class SkillBar extends React.Component {
    render() {
        return(
            <div>
                <img src={this.props.image} alt={this.props.lang} id={this.props.lang} className="icon"/>
            </div>
        );
    }
}

export default SkillBar;