import { useState } from 'react'
import "./estilos.css"

const ListaProfessores = () => {
    const [ lista, setLista ] = useState([])
    const [ nome, setNome ] = useState()

    const todaLista = lista.map((item, key)=>{
        return(
            <li>{ item }</li>
        )
    })

    const addProfessor = () => {
        setLista( x => [ ...lista, nome ])
        console.log(lista)
    }

    return (
        <div>
            <h2>Lista de Professores</h2>
            <div>
                <label>Nome: </label>
                <input type="text"
                    value={ nome }
                    onChange={ (e) => setNome(e.target.value)}
                />
                <input type="button"
                    value="+"
                    onClick={ () => addProfessor() }
                />
                <ul>
                    { todaLista }
                </ul>
            </div>
        </div>
    )

}

export default ListaProfessores