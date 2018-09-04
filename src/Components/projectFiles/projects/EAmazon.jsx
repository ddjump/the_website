import React from 'react';
import '../../../CSS/projectsCSS/projects.css';

class EAmazon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tools: ["Java",	"JDBC",	"mySQL",	"Servlets",	"JSP"]
        }
    }

    render() {
        var toolArray = this.state.tools.map((i) => <div id="tool">{i}</div>);
        return(
            <div id="projectBox">
                <p><div id="projectTitle">E-Amazon</div><div>Dec 2017</div></p>
                <p> Group	project	made	to	mimic	Amazon,	which	includes	features	such	as	buying	and	selling	items. The	database	is	handled	by	JDBC,	and	all	information	is	stored	and	managed	in	SQL.	</p>
                <div id="toolBox">
                    {toolArray}
                </div>
            </div>
        );
    }
}	

export default EAmazon;