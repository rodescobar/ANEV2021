import './App.css';
import Exercicio from './exercicio2'
import { useState } from 'react'
  
function App() {
  const [ nome, setNome ] = useState()
  const [ telefone, setTelefone ] = useState()

  return (
    <div className="App">
      <header className="App-header">
        <div class="nome">
          <label>Digite o Nome: </label>
          <input type="text"
            value={ nome }
            onChange={ (e) => setNome(e.target.value)}
          />
        </div>
        <div class="telefone">
          <label>Digite o Telefone: </label>
          <input type="text"
            value={ telefone }
            onChange={ (e) => setTelefone(e.target.value)}
          />
        </div>
        <div class="caixa-central">
          <p class="conteudo-central">{ nome } <br></br> { telefone }</p>
          <Exercicio></Exercicio>
        </div>
      </header>
    </div>
  );
}

export default App;
