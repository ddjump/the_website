import React from 'react';
import '../../../CSS/projectsCSS/projects.css';

class SlideShowMaker extends React.Component {
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
                <p><div id="projectTitle">SlideShowMaker</div><div>Nov 2015</div></p>
                <p>Implemented	Web	utility	that	displays	slideshows	in	the	browser	and	allows	dynamic	actions	such	as running	the	presentation	with	animations	using	Javascript.</p>
                <div id="toolBox">
                    {toolArray}
                </div>
            </div>
        );
    }
}	

export default SlideShowMaker;