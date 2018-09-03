import React from 'react';
import '../../CSS/AboutMe.css';
import rayPic from '../../Images/rayAllen.jpg';

class BBall extends React.Component {
    render() {
        return(
            <div id="bballBubble">
                <center>
                    <img src={rayPic} id="ray" alt="ray"></img>
                    <p>Favorite Player:</p>
                    <p><b>Ray Allen</b></p>
                </center>
            </div>
        );
    }
}

export default BBall;