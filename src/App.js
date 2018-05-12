import React, { Component } from 'react';
import logo from './logo.svg';
import logo_cre from './logo_cre.svg';
import './App.css';
import { Link } from 'react-router-dom';
import Čas from './Čas';
import Euba from './Euba.js';
import Prihlasenie from './Login.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-title">Prehľad kurzov z predmetu IMAPL</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <p className="Cas">
          <Čas/>
          </p>
          <h2 className="App-intro">Vyber si z uvedených kurzov</h2>
      <p className="App-link">
          < Link to="/Kurz">
            Kurz HI_1
      </Link>
      </p>
      <p className="App-link">
          < Link to="/Kurz2">
             Kurz HI_2
       </Link>
      </p>
        <p className="title2">
          <h2>Odkaz na stránku Ekonomickej Univerzity</h2>
            <Euba/>
        </p>
          <p className="Login">
              <Prihlasenie/>
          </p>
        <header className="App-header">
          <h3>Krátky popis predmetu</h3>
          <h4> Predmet internetové a mobilné aplikácie sa zaoberá tvorbou aplikácie v programovacom
          jazyku Javascript. Hlavnou úlohou predmetu je naučiť sa pracovať s jednotlivými komponentami
          a dokázať prepájať vedomosti z jednotlivých oblastí do jedného celku. Tento predmet pozostáva
          z 13 týždňového kurzu, ktorý sa rozdeluje na dve skupiny.</h4>
        </header>
          <img src={logo_cre} className="App-logo" alt="logo_cre" />
      </div>
    );
  }
}

export default App;
