import React from 'react';
import '../../CSS/AboutMe.css';
import pelicana from '../../Images/pelicana.png';

class Fried extends React.Component {
    render() {
        return(
            <div id="friedBubble">
                <center>
                    <p>Favorite Korean Fried </p>
                    <p>Chicken Place:</p>
                    <img src={pelicana} id="pelicana" alt="pelicana"></img>
                </center>
            </div>
        );
    }
}

export default Fried;