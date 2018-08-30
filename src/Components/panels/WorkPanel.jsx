import React from 'react';
import '../../CSS/panelsCSS/WorkPanel.css';
import LineHeight from '../../ReuseComponent/LineHeight.jsx';
import DS from './WorkView/DS.jsx';
import SBH from './WorkView/SBH.jsx';
import AFY from './WorkView/AFY.jsx';

class WorkPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            clickArray: [{id: "0", company: "DigitalSwitchNY", year: "2017"}, 
                        {id: "1", company: "Stony Brook Hospital", year: "2017"}, 
                        {id: "2", company: "A Finer You", year: "2016"}
                        // {id: "3", company: "99 Cent and Great Imports", year: "2016"}, 
                        // {id: "4", company: "Sonic Drivein", year: "2016"}, 
                        // {id: "5", company: "Nassau Community College", year: "2015"},
                        // {id: "6", company: "Home Goods", year: "2015"}
                    ],
            choiceClicked: null,
            doubleClick: false
        };
    }

    handleClick(i) {
        console.log("handleClick " + i);
        if(this.state.doubleClick) {
            this.setState({doubleClick: false, choiceClicked: null});
        } else if(i === this.state.choiceClicked) {
            this.setState({doubleClick: true, choiceClicked: null});
        } else {
            this.setState({doubleClick: false});
        }
        this.setState({clicked: !this.state.clicked, choiceClicked: i});
    }

    render() {
        var choices = this.state.clickArray.map((choice, i) => <div key={choice.id}><ClickBox company={choice.company} year={choice.year} onClick={() => this.handleClick(i)} clicked={this.state.choiceClicked} number={choice.id}/><LineHeight /></div>);
        var infoView = null;
        console.log(this.state.choiceClicked);
        if(this.state.doubleClick) {
            infoView = null;
        } else if(this.state.choiceClicked === 0) {
            infoView = <DS />;
        } else if(this.state.choiceClicked === 1) {
            infoView = <SBH />;
        } else if(this.state.choiceClicked === 2) {
            infoView = <AFY />;
        } else {
            infoView = null;
        }
        return(
            <div>
                <div className="select">
                    {choices}
                </div>
                {infoView}
            </div>
        );
    }
}

class ClickBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            company: this.props.company,
            year: this.props.year,
            clicked: this.props.clicked,
            id: this.props.id
        };
        this.handleClick = this.props.onClick;
    }

    render() {
        return(
            <div className="eachChoice" onClick={this.handleClick.bind(this)}>
                <center>
                    <p>{this.state.company}</p>
                </center>
            </div>
        );
    }
}

export default WorkPanel;