import React from 'react';
import '../../CSS/AboutMe.css';
import starcraft from '../../Images/starcraft.png';
import league from '../../Images/league.png';
import fortnite from '../../Images/fortnite.png'

class Game extends React.Component {
    render() {
        return(
            <div id="gameBubble">
                <center id="moveUp">
                    <p>Video Games I </p>
                    <p>love playing:</p>
                    <img src={starcraft} id="gameIcon" alt="sc"></img>
                    <img src={league} id="gameIcon" alt="lol"></img>
                    <img src={fortnite} id="gameIcon" alt="fort"></img>
                </center>
            </div>
        );
    }
}

export default Game;