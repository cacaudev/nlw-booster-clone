import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { logo } from '../../static/img';
import { FiArrowLeft } from 'react-icons/fi';

const CreatePoint = () => {
  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="Ecoleta" />
        <Link to="/">
          <FiArrowLeft />
          Voltar para Home
        </Link>
      </header>
      <form>
        <h1>Cadastro do <br /> ponto de coleta</h1>

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>
        </fieldset>
        <div className="field">
          <label htmlFor="name">Nome da entidade:</label>
          <input
            type="text"
            name="name"
            id="name"
          />
        </div>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
          </legend>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Ítens de coleta</h2>
          </legend>
        </fieldset>
      </form>
    </div>
  );
}

export default CreatePoint;