import './App.css';
//import Exercicio3 from './nome_ra'
import { useState } from 'react'
  
function App() {
  const [ nome, setNome ] = useState()
  const [ telefone, setTelefone ] = useState()

  return (
    <div className="App">
      <header className="App-header">
        <div class="nome">
          <label>Digite o nome: </label>
          <input type="text"
            value={ nome }
            onChange={ (e) => setNome(e.target.value)}
          />
        </div>
        <div class="telefone">
          <label>Digite o telefone: </label>
          <input type="text"
            value={ telefone }
            onChange={ (e) => setTelefone(e.target.value)}
          />
        </div>
        <div class="caixa-central">
          <p class="conteudo-caixa-central">{ nome } <br></br> { telefone }</p>
        </div>
      </header>
    </div>
  );
}
export default App;