//Sequencia useState
//Estado do componente
import { useState } from 'react'

const Seq01 = () => {

    const [ valor, setValor ] = useState(0)

    var numero = 1
    
    const Adicionar = () => {
        setValor(valor + 1)

        numero = numero + 1
        console.log("Clicou no botao add")
    }

    return (
        <div>
            Você chegou em App
            <br />
            Resultado: { numero }
            <br />
            <input type="button" value="Add" onClick={ () => Adicionar() } />
            <br />
            Aqui é o valor: { valor }
        </div>
    )    
}

export default Seq01