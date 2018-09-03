import React from 'react';
import '../../CSS/AboutMe.css';
import appleIcon from '../../Images/appleIcon.png';

class Tennis extends React.Component {
    render() {
        return(
            <div id="laptopBubble">
                <center>
                    <p>My Current Laptop:</p>
                    <br />
                    <p><b id="boldSmaller">MacBook Pro(13-inch, Early 2015)</b></p>
                    <p><b id="boldSmaller">Processor </b>2.7 GHz Intel Core i5</p>
                    <p><b id="boldSmaller">Memory </b>8 GB 1867 MHz DDR3</p>
                    <p><b id="boldSmaller">Graphics </b>Intel Iris Graphics 6100</p>
                    <br />
                    <img src={appleIcon} id="apple" alt="apple"></img>
                </center>
            </div>
        );
    }
}

export default Tennis;