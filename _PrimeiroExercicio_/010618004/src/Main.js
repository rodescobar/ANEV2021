import React, { useState } from "react";
import './Main.css';
import Componente from'./componente.js';


function Main() {

  const [nome, setNome] = useState("")
  const [telefone, setTelefone] = useState("")

  return (
    <div className="Main">
      <form>
        <div>
          <p>
            Digite seu nome:
          </p>
          <input value={nome}onChange={e => setNome(e.target.value)} placeholder="Coloque seu nome aqui"/>
        </div>
        <div>
          <p>
            Digite o telefone:
          </p>
          <input value={telefone}onChange={e => setTelefone(e.target.value)}placeholder="Coloque seu telefone aqui"/>
        </div>
      </form>
      <div className="Caixa">
        <div className="Resposta">
          <p>{nome}</p>
          <p>{telefone}</p>
        </div>
      </div>
      <Componente/>
    </div>
  );
}

export default Main;
