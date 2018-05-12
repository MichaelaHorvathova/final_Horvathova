import React from 'react';
import { Link } from 'react-router-dom';
import './Euba.css';

class Euba extends React.Component {
    render() {
        return (
            <div>
                <button className="Euba">
                    <a href="http://www.euba.sk" onClick={ () => {this.handleClick}}>Euba.sk</a>
                </button>
            </div>
        );
    }
}

export default Euba;