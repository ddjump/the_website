import React from 'react';
import '../../CSS/panelsCSS/WorkPanel.css';
import LineHeight from '../../ReuseComponent/LineHeight.jsx';

class WorkPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            clickArray: [{id: "0", company: "DigitalSwitchNY, iOS Developer", year: "2017"}, 
                        {id: "1", company: "Stony Brook Hospital", year: "2017"}, 
                        {id: "2", company: "A Finer You", year: "2016"},
                        {id: "3", company: "99 Cent and Great Imports", year: "2016"}, 
                        {id: "4", company: "Sonic Drivein", year: "2016"}, 
                        {id: "5", company: "Nassau Community College", year: "2015"},
                        {id: "6", company: "Home Goods", year: "2015"}]
        };
    }

    handleClick(i) {
        this.setState({clicked: !this.state.clicked});
    }

    render() {
        const choices = this.state.clickArray.map((choice, i) => <div><center><ClickBox company={choice.company} key={choice.id} year={choice.year} onClick={() => this.handleClick(i)}/><LineHeight /></center></div>);
        var infoView = null;
        if(this.state.clicked) {
            infoView = <div className="view"></div>;
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
    }
    render() {
        return(
            <div className="eachChoice">
                <center>
                    <p>{this.props.company}</p>
                    <p>{this.props.year}</p>
                </center>
            </div>
        );
    }

}

export default WorkPanel;