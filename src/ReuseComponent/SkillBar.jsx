import React from 'react';
import Circle from '../ReuseComponent/Circle.jsx';
import TabSpace from '../ReuseComponent/TabSpace.jsx';

class SkillBar extends React.Component {

    render() {
        let arrCircle = [];
        var counterColor = parseInt(this.props.skillLevel, 10);
        for(var i = 0; i < 5; i++) {
            var circleColor;
            if (counterColor !== 0) {
                circleColor = this.props.color;
                counterColor--;
            } else {
                circleColor = "#D9D9D9";
            }
            arrCircle.push(<Circle color={circleColor}/>)
        }

        return(
            <div id="vert">
                <img src={this.props.image} alt={this.props.lang} id={this.props.lang} className="icon"/>
                <TabSpace />
                {arrCircle}
            </div>
        );
    }
}

export default SkillBar;