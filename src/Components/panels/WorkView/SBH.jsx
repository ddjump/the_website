import React from 'react';
import '../../../CSS/panelsCSS/WorkPanel.css';

class SBH extends React.Component {
    render() {
        return(
            <div className="view">
                <div>
                    <p><b>Stony Brook Hospital</b>,iOS Developer</p>
                    <div id="date">June	2017	– Sept	2017</div>
                    <br />
                    <p id="small">• Researched	with	colleagues	on	an	iOS	app	called	Code	Blue,	under	Dr. Paul	Fodor.</p>
                    <p id="small">• The	main	purpose	of	the	app	is	to	record	data	of	a	patient	undergoing	cardiac	arrest.</p>
                    <p id="small">• Improved	recommendation	system	to	mimic	the	exact	operation	step	by	step.</p>
                </div>
            </div>
        );
    }
}

export default SBH;