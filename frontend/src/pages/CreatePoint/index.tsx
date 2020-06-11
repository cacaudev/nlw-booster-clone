import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import api from "../../services/api";
import {
  logo,
  baterias,
  eletronicos,
  lampadas,
  oleo,
  organicos,
  papeisPapelao,
} from "../../assets/img";
import { FiArrowLeft } from "react-icons/fi";
import { Map, TileLayer, Marker } from "react-leaflet";

const CreatePoint = () => {
  useEffect(() => {
    api.get("items").then((response) => {
      console.log("response", response);
    });
  }, []);

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
        <h1>
          Cadastro do <br /> ponto de coleta
        </h1>

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>
        </fieldset>

        <div className="field">
          <label htmlFor="name">Nome da entidade:</label>
          <input type="text" name="name" id="name" />
        </div>

        <div className="field-group">
          <div className="field">
            <label htmlFor="email">E-mail:</label>
            <input type="email" name="email" id="email" />
          </div>

          <div className="field">
            <label htmlFor="whatsapp">WhatsApp:</label>
            <input type="text" name="whatsapp" id="whatsapp" />
          </div>
        </div>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione o endereço no mapa</span>
          </legend>

          <Map center={[-21.1224786, -42.9434941]} zoom={14}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-21.1224786, -42.9434941]} />
          </Map>

          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">Estado (UF)</label>
              <select name="uf" id="uf">
                <option value="0">Selecione uma UF</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="city">Cidade</label>
              <select name="city" id="city">
                <option value="0">Selecione uma cidade</option>
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Ítens de coleta</h2>
            <span>Selecione um ou mais items abaixo</span>
          </legend>
          <ul className="items-grid">
            <li className="selected">
              <img src={baterias} alt="baterias" />
              <span>Baterias</span>
            </li>
            <li>
              <img src={lampadas} alt="lampadas" />
              <span>Lâmpadas</span>
            </li>
            <li>
              <img src={oleo} alt="oleo" />
              <span>Óleo</span>
            </li>
            <li>
              <img src={eletronicos} alt="eletronicos" />
              <span>Resíduos Eletrônicos</span>
            </li>
            <li>
              <img src={organicos} alt="organicos" />
              <span>Resíduos Orgânicos</span>
            </li>
            <li>
              <img src={papeisPapelao} alt="papeisPapelao" />
              <span>Papéis / Papelão</span>
            </li>
          </ul>
        </fieldset>
        <button type="submit">Cadastrar ponto de coleta</button>
      </form>
    </div>
  );
};

export default CreatePoint;
