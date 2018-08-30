import React from 'react';
import '../../../CSS/panelsCSS/WorkPanel.css';

class DS extends React.Component {
    render() {
        return(
            <div className="view">
                <div>
                    <p><b>DigitalSwitchNY</b>,iOS Developer</p>
                    <div id="date">Jan	2017	– Oct	2017</div>
                    <br/>
                    <p id="small">• Worked	with the iOS development team	to	produce	an	E-Commerce	app	for	Gb’s	Sneakers</p>
                    <p id="small">• The	app	is connected	to	a	Shopify	website	and	utilizes	Mobile	SDK	Buy,	which	uses	GraphQL.</p>
                    <p id="small">• All	user	information	is	managed	by	Firebase,	and	take	advantage	of	their	real-time	database.</p>
                    <p id="small">• Maintained	E-Commerce	system	and	also	added	an	award	system	by	using	QR	code.</p> 
                </div>
            </div>
        );
    }
}

export default DS;