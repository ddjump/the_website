import React from 'react';
import { Link } from 'react-router-dom';

class Resume extends React.Component {
    render() {
        return(
            <div>
                <Link to="/"><h2>Resume Page</h2></Link>
            </div>
        );
    }
}

export default Resume;