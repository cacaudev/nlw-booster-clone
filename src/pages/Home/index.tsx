import React from 'react';
import logo from '../../static/img/logo.svg';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Ecoleta logo" />
        </header>
        <main>
          <h1>Seu marketplace de coleta de resíduos.</h1>
          <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente</p>
          <a href="/cadastro">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre um ponto de coleta</strong>
          </a>
        </main>
      </div>
    </div>
  );
}

export default Home;