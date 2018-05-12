import React, { Component } from 'react';
import './kurz_HI2.css';
import logo from './logo_fhi.svg';
import { Link } from 'react-router-dom';
import Editor from './Editor';
import picture from './app_2.gif';
import Historia from './Historia_2.js';

class Kurz extends Component {
    render() {
        return (
            <div className="kurz2">
            <img src={logo} className="App_fhi-logo" alt="logo" />
            <h1 > Vitajte v kurze HI_2 {this.props.name}</h1>
        <p className="kurz2-intro">
            História jednotlivých častí kurzov
        </p>
            <p><Historia/></p>
                <Link to = "/" >
                    Späť
                    < /Link>
            <Editor />
            <div className="picture">
                <img src={picture} width="500" height="250" />
            </div>
            </div>
    );
    }
}
export default Kurz;
