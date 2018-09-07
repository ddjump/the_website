import React from 'react';
import '../../../CSS/projectsCSS/projects.css';

class MineSweeper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tools: ["MIPS Assembly"]
        }
    }

    render() {
        var toolArray = this.state.tools.map((i) => <div id="tool">{i}</div>);
        return(
            <div id="projectBox">
                <p><div id="projectTitle">MineSweeper</div><div>Oct 2016</div></p>
                <p>Minesweeper game implemented using MIPS assembly. Designed the game flow using concepts such as recursion and MVC architecture</p>
                <div id="toolBox">
                    {toolArray}
                </div>
            </div>
        );
    }
}	

export default MineSweeper;