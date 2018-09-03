import React from 'react';
import '../../CSS/AboutMe.css';
// import rafaPic from '../../Images/rafaNadal.jpg';

class TV extends React.Component {
    render() {
        return(
            <div id="tvBubble">
                <center>
                    <p>Favorite TV Shows:</p>
                    <br />
                    <p><b>The Big Bang Theory</b></p>
                    <p><b>Sherlock</b></p>
                    <p><b>Breaking Bad</b></p>
                    <p><b>Rick and Morty</b></p>
                </center>
            </div>
        );
    }
}

export default TV;