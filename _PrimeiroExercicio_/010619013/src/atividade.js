import React, { useState } from "react";
import './atividade.css';
import Jorge from './jorge';

function Atividade() {

  const [nome, setNome] = useState("")
  const [telefone, setTelefone] = useState("")

  return (
    <div className="atividade">
      <form>
        <div>
          <p>
            Digite seu nome:
          </p>
          <input
            value={nome}
            onChange={e => setNome(e.target.value)}
            placeholder="Seu nome aqui!"
          />
        </div>
        <div>
          <p>
            Digite o telefone:
          </p>
          <input
            value={telefone}
            onChange={e => setTelefone(e.target.value)}
            placeholder="00 1234-5678"
          />
        </div>
      </form>
      <div className="Resultado1">
        <div className="Resultad2">
          <p>{nome}</p>
          <p>{telefone}</p>
        </div>
      </div>
      <div className="Resultado_Atividade">
        <div className="Resultados">
          <button onClick={Jorge}> Veja autor </button>
        </div> 
      </div>
      
    </div>
  );
}

export default Atividade;
