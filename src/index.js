import React from 'react';
import ReactDOM from 'react-dom';
// import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App.js';
import AboutMe from './Components/AboutMe.jsx';
import Resume from './Components/Resume.jsx';
import Projects from './Components/Projects.jsx';

const baseUrl = process.env.PUBLIC_URL;

ReactDOM.render(
    (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path={baseUrl + "/"} exact component={ App } />
                <Route path={baseUrl + "/aboutme"} component={ AboutMe } />
                <Route path={baseUrl + "/resume"} component={ Resume } />
                <Route path={baseUrl + "/projects"} component={ Projects }/>
            </Switch>
        </div>
    </BrowserRouter>
    
    ), document.getElementById('root'));
// registerServiceWorker();
