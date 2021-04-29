import React, { useState } from "react";
import './Exe.css';
import infoaluno from './cadastro.js';

function Exe() {

  const [nome, Nome] = useState("")
  const [telefone, Telefone] = useState("")

  return (
    <div className="Exe">
      <form>
        <div>
          <p>
            Digite seu nome:
          </p>
          <input
            value={nome}
            onChange={e => Nome(e.target.value)}
            placeholder="Nome"
          />
        </div>
        <div>
          <p>
            Digite o telefone:
          </p>
          <input
            value={telefone}
            onChange={e => Telefone(e.target.value)}
            placeholder="Telefone"
          />
        </div>
      </form>
      <div className="Central_result">
        <div className="result">
          <p>{nome}</p>
          <p>{telefone}</p>
        </div>
      </div>

      <div className="Central_result">
        <div className="result">
          <p>{infoaluno.nome}</p>
          <p>{infoaluno.ra}</p>
        </div>
      </div>
    </div>
  );
}

export default Exe;
