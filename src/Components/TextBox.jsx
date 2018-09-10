import React from 'react';
import '../CSS/TextBox.css';

class TextBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hover: false
        };
    }

    render() {
        return(
            <div id="text">
                <div className="box wave">
                </div>
                    <center><p id="myName">Daniel Yen</p>
                    <p id="job">Web & Mobile Developer</p>
                </center>
            </div>
        );
    }
}       

export default TextBox;