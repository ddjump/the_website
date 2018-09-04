import React from 'react';
import '../../../CSS/projectsCSS/projects.css';

class RedistrictingApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tools: ["Java","Spring Boot", "HTML/CSS", "Javascript",	"Google	Map API"]
        }
    }

    render() {
        var toolArray = this.state.tools.map((i) => <div id="tool">{i}</div>);
        return(
            <div id="projectBox">
                <p><div id="projectTitle">RedistrictingApp</div><div>May 2018</div></p>
                <p>Web application that analyzes from politicians manipulate district boundaries to gain an advantage. By	using	data	collected,	district	boundaries	can	be	redrawn	to	ensure	a	fair	election. Worked	on	the	front	end	by	using	Google	Map	features to	create	an	interactive	map. Interactive	features	such	as	zooming	in	a	state	and	also	redrawing	new	boundaries	based	on	data.</p>
                <div id="toolBox">
                    {toolArray}
                </div>
            </div>
        );
    }
}	

export default RedistrictingApp;