import React, { Component } from 'react';
import './kurz_HI1.css';
import logo from './logo_fhi.svg';
import { Link } from 'react-router-dom';
import Editor from './Editor';
import picture from './appka.gif';
import Historia from './Historia.js';

class Kurz extends Component {
    render() {
        return (
            <div className="kurz">
            <img src={logo} className="App_fhi-logo" alt="logo" />
            <h1 > Vitajte v kurze HI_1 {this.props.name}</h1>
         <p className="kurz-intro">
            História jednotlivých častí kurzov
         </p>
            <p> <Historia/> </p>
             <Link to = "/" >
                 Späť
             </Link>
        <Editor />
             <div className="picture">
                 <img src={picture} width="500" height="250" />
             </div>

            </div>
    );
    }
}
export default Kurz;
