import React from 'react';
import '../../CSS/AboutMe.css';
import rafaPic from '../../Images/rafaNadal.jpg';

class Tennis extends React.Component {
    render() {
        return(
            <div id="tennisBubble">
                <center>
                <img src={rafaPic} id="rafa" alt="rafa"></img>
                    <p>Favorite Player:</p>
                    <p><b>Rafael Nadal</b></p>
                </center>
            </div>
        );
    }
}

export default Tennis;