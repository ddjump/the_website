import React from 'react';
import '../../../CSS/projectsCSS/projects.css';

class EasyFill extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tools: ["Swift","Alamofire","Microsoft	Azure"]
        }
    }

    render() {
        var toolArray = this.state.tools.map((i) => <div id="tool">{i}</div>);
        return(
            <div id="projectBox">
                <p><div id="projectTitle">EasyFill</div><div>In Store Soon</div></p>
                <p>An iOS app target for helping the visually impaired patients fill out medical forms at the doctors office. The app will ask the patient to draw/write directly on the device and each image will be process using Microsoft Azure Computer API to covert each drawing/writing into text. Finally the app will automatically fill in the form.</p>
                <div id="toolBox">
                    {toolArray}
                </div>
            </div>
        );
    }
}

export default EasyFill;