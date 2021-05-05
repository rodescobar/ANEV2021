import './App.css'
import { useState } from 'react'
import Exercicio2 from './Exercicio2'

function App() {

  const [ nome, setNome ] = useState()
  const [ telefone, setTelefone ] = useState()

  return (
    <div>

      <div>
        <label>Digite seu nome: </label>
        <input 
          type="text" 
          value= { nome }
          onChange= { (e) => setNome(e.target.value)}
          />
      </div>

      <br />

      <div>
        <label>Digite seu telefone: </label>
        <input 
          type="text"
          value= { telefone }
          onChange= { (e) => setTelefone(e.target.value) }
          />
      </div>

      <div class="caixa-central">
        <p class="conteudo-central">{ nome } <br /> { telefone }</p>
      </div>

      <br />

      <Exercicio2 />

    </div>

  );
}

export default App;
