import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Resume from './Components/Resume';

ReactDOM.render(
    (
    <BrowserRouter>
     <div>
      <Switch>
       <Route path="/" exact component={ App } />
       <Route path="/resume" component={ Resume } />
      </Switch>
     </div>
    </BrowserRouter>
    
    ), document.getElementById('root'));
registerServiceWorker();
