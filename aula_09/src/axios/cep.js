import { useState } from 'react'

import axios from 'axios'

const Cep = () => {
    const [ cep, SetCep ] = useState()

    const [ endereco, setEndereco ] = useState()
    const [ dados, setDados ] = useState({
        cidade: "",
        bairro: "",
        estado: ""
    })

    const buscarCep = () => {
        //var url = "https://ws.apicep.com/cep/" + cep + ".json"
        var url = `https://ws.apicep.com/cep/${cep}.json`
        axios
            .get( url )
            .then( (retorno) => {
                setEndereco( retorno.data.address )
                setDados({
                    cidade: retorno.data.city,
                    bairro: retorno.data.district,
                })
            })
    }

    return(
        <div>
            <h1>Busca endereço</h1>
            <div>
                <label>Entre com o cep</label>
                <input 
                    type="text"
                    value={ cep }
                    onChange={ (e) => SetCep(e.target.value) }
                />
                <input 
                    type="button"
                    value="Buscar"
                    onClick={ () => buscarCep() }
                />
            </div>
            <br />
            <div>
                <label>Endereço</label>
                <input type="text" value={ endereco } disabled="true" />
                <br />
                <label>Bairro</label>
                <input type="text" value={ dados.bairro } disabled="true" />
                <br />
                <label>Cidade</label>
                <input type="text" value= {dados.cidade } disabled="true" />
            </div>
        </div>
    )
}

export default Cep