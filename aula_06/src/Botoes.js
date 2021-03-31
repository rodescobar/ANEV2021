import { useState } from 'react'

const Botoes = ({ nome }) => {

    const [ contador, setContador ] = useState(0)

    const Add = () => {
        setContador( contador + 1 )
    }

    return (
        <div>
            O valor do contador é { contador }
            <br />
            <button onClick={ () => Add() }>{ nome }</button>
        </div>
    )
}

export default Botoes