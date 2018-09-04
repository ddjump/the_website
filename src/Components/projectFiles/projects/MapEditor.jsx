import React from 'react';
import '../../../CSS/projectsCSS/projects.css';

class MapEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tools: ["Java",	"JavaFX","JSON"]
        }
    }

    render() {
        var toolArray = this.state.tools.map((i) => <div id="tool">{i}</div>);
        return(
            <div id="projectBox">
                <p><div id="projectTitle">MapEditor</div><div>June 2016</div></p>
                <p>A simple Java Application that reads JSON files containing coordinates of a country. The editor allows the user to recolor each region. The user have the ability to export the map with customizable sizes.</p>
                <div id="toolBox">
                    {toolArray}
                </div>
            </div>
        );
    }
}	

export default MapEditor;