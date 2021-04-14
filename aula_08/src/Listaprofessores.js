import { useState } from 'react'

import "./estilos.css"

var lista = [
    "Rodrigo", "Marcelo", "Celso", "Luiz Camaliote", "Zé Martinez"
]

const ListaProfessores = () => {

    const [ lista, setLista ] = useState()

    const todaLista = lista.map((item, key)=>{
        return(
            <li>{ item }</li>
        )
    })

    return (
        <div>
            <h2>Lista de Professores</h2>

            <div>
                <label>Nome: </label>
                <input type="text" />
                <input type="button"
                    value="+"
                />
                <ul>
                    { todaLista }
                </ul>
            </div>
        </div>
    )

}

export default ListaProfessores