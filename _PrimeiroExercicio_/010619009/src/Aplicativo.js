import React, { useState } from "react";
import './Aplicativo.css';
import alunoInfos from './exercicio.js';

function Aplicativo() {

  const [nome, setNome] = useState("")
  const [telefone, setTelefone] = useState("")

  return (
    <div className="Aplicativo">
      <form>
        <div>
          <p>
            Digite seu nome:
          </p>
          <input
            value={nome}
            onChange={e => setNome(e.target.value)}
            placeholder="Nome"
          />
        </div>
        <div>
          <p>
            Digite seu telefone:
          </p>
          <input
            value={telefone}
            onChange={e => setTelefone(e.target.value)}
            placeholder="Telefone"
          />
        </div>
      </form>
      <div className="Resultado">
        <div className="Resultado_Total">
          <p>{nome}</p>
          <p>{telefone}</p>
        </div>
      </div>

      <div className="Resultado">
        <div className="Resultado_Total">
          <p>{alunoInfos.nome}</p>
          <p>{alunoInfos.ra}</p>
        </div>
      </div>

    </div>
  );
}

export default Aplicativo;
