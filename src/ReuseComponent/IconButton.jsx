import React from 'react';
import docIcon from '../Images/docIcon.png';
import '../CSS/ReuseComponent.css';

class IconButton extends React.Component {
    render() {
        return(
            <div>
                <button className='btn'><img alt="doc" id="doc" src={ docIcon }/>Resume</button>
            </div>
        );
    }
}

export default IconButton;