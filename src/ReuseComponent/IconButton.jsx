import React from 'react';

class IconButton extends React.Component {
    render() {
        return(
            <div>
                <button id={this.props.id}><img alt="image" id="image"  src={this.props.image}/>{this.props.title}</button>
            </div>
        );
    }
}

export default IconButton;