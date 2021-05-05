import React, { useState } from "react";
import './App.css';
import MeusDados from './meusdados';



function App() {

  const [nome, setNome] = useState("")
  const [telefone, setTelefone] = useState("")

  return (
    <div className="App">
      <MeusDados />
      <form>
        <div className="linha">
          <p>Digite o nome:</p>
          <input value={nome} onChange={e => setNome(e.target.value)} />
        </div>
        <div className="linha">
          <p>Digite o telefone:</p>
          <input value={telefone} onChange={e => setTelefone(e.target.value)} />
        </div>
      </form>
      <div className="caixa">
        <div className="texto">
          <p>{nome}</p>
          <p>{telefone}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
