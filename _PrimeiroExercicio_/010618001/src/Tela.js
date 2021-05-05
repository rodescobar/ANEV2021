import './Tela.css';
import { useState } from 'react'
import NomeAluno from './NomeAluno'
  
function Tela() {
  const [ Nome, setNome ] = useState()
  const [ Celular, setCelular ] = useState()

  return (
    <div className="Aplicativo">
      <header className="Ouvinte">
        <div class="Nome">
          <label>Digite seu Nome: </label>
          <input type="text"
            value={ Nome }
            onChange={ (e) => setNome(e.target.value)}
          />
        </div>
        <div class="Celular">
          <label>Número do Celular: </label>
          <input type="text"
            value={ Celular }
            onChange={ (e) => setCelular(e.target.value)}
          />
        </div>
        <div class="caixa-central">
          <p class="texto-caixa-central">{ Nome } <br></br> { Celular }</p>
          <NomeAluno></NomeAluno>
        </div>
      </header>
    </div>
  );
}

export default Tela;
