import './Site.css';
import Item3 from './Item3'
import { useState } from 'react'

  
function Site() {
  const [nome, setNome ] = useState()
  const [ telefone, setTelefone ] = useState()

  return (
    <div className="Site">
      <header className="Site">
        <div class="nome">
          <label>Digite o Nome: </label>
          <input type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div class="telefone">
          <label>Digite o Telefone: </label>
          <input type="text"
          pllplnnvkdn
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </div>
        <div class="caixa-central">
          <p class="conteudo-caixa-central">{nome} <br></br> {telefone}</p>
          <Item3></Item3>
        </div>
      </header>
    </div>
  );
}

export default Site;
