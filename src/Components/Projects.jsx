import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Projects.css';
import arrowRed from '../Images/arrowRed.png';
import github from '../Images/github.png';
import Diamond from './projectFiles/Diamond.jsx';
// import Display from './projectFiles/Display.jsx';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: null,
            projects: [0, 1, 2, 3, 4, 5, 6]
        }
    }

    handleClick(i) {
        console.log(i)
        this.setState({ clicked: i});
        console.log(this.state.clicked + " oooooo")
        this.forceUpdate();
    }

    render() {
        // var diamonds = [];
        var clicked = this.state.clicked;
        // for(let i = 0; i < 7; i++) {
            
        // }
        var diamonds = this.state.projects.map((i) => {
            if(clicked !== i) {
                return <Diamond onClick={() => this.handleClick(i)}/>;
            } else {
                return <Diamond clicked="true" onClick={() => this.handleClick(i)}/>;
            }
        });


        return(
            <div>
                <Link to="/"><img alt="arrowRed" id="arrowRed" src={ arrowRed }/></Link>
                <center><p id="projectsTitle">Projects</p></center>
                <img alt="github" id="github" src={ github }/>
                <div id="optionProjects">
                    {diamonds}
                </div>
                {/* {this.state.clicked !== "" ? <Display /> : null} */}
            </div>
        );
    }
}

// class Display extends React.Component {
//     render() {
//         return(
//             <div id="display">

//                 <p>Hello</p>
//             </div>
//         );
//     }
// }

export default Projects;