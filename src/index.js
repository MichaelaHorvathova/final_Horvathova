import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom'
import Kurz from './kurz_HI1';
import Kurz2 from './kurz_HI2';

ReactDOM.render(<BrowserRouter>
    <div>
        <Route exact path="/" component={App} />
        <Route path="/Kurz" component={Kurz} />
        <Route path="/Kurz2" component={Kurz2} />
    </div>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
