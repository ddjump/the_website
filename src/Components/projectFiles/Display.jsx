import React from 'react';
import '../../CSS/Projects.css';
import EasyFill from './projects/EasyFill.jsx';
import RedistrictingApp from './projects/RedistrictingApp.jsx';
import EAmazon from './projects/EAmazon.jsx';
import MapEditor from './projects/MapEditor.jsx';
import SlideShowMaker from './projects/SlideShowMaker.jsx';
import MineSweeper from './projects/MineSweeper.jsx';

class Display extends React.Component {
    render() {
        var show = null;
        var choice = this.props.choice;

        switch(choice) {
            case 0:
                show = <EasyFill />;
                break;
            case 1:
                show = <RedistrictingApp />;
                break;
            case 2:
                show = <EAmazon />;
                break;
            case 3:
                show = <MineSweeper />;
                break;
            case 4:
                show = <MapEditor />;
                break;
            case 5:
                show = <SlideShowMaker />;
                break;
            default:
                show = null;
        }

        return(
            <div id="display">
                {show}
            </div>
        );
    }
}

export default Display;