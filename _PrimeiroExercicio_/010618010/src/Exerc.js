import React, { useState } from "react";
import './Exerc.css';
import FichaCadastral from './Aluno.js';

function Exerc() {

  const [nome, setNome] = useState("")
  const [telefone, setTelefone] = useState("")

  return (
    <div className="Exerc">
      <form>
        <div>
          <p>
            Seu nome:
          </p>
          <input
            value={nome}
            onChange={e => setNome(e.target.value)}
            placeholder="Nome"
          />
        </div>
        <div>
          <p>
            Seu telefone:
          </p>
          <input
            value={telefone}
            onChange={e => setTelefone(e.target.value)}
            placeholder="Telefone"
          />
        </div>
      </form>
      <div className="RCentral">
        <div className="Result">
          <p>{nome}</p>
          <p>{telefone}</p>
        </div>
      </div>

      <div className="RCentral">
        <div className="Result">
          <p>{FichaCadastral.Nome}</p>
          <p>{FichaCadastral.RA}</p>
        </div>
      </div>
      <div className="Result"></div>
    </div>
  );
}

export default Exerc;
