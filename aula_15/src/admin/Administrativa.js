import { useEffects } from 'react'
import axios from 'axios'

import { 
    Button
} from '@material-ui/core'

const Administrativa = () => {

    const handleClick = async () => {

        const token = localStorage.getItem("NossoToken")
        
        var bearer = `Bearer ${token}`
        

        //get( URL, { configuracoes } )
        //post( URL, DATA, { configuracoes })
        const url = "https://professor-artin.herokuapp.com/usuarios/lista"
        await axios
                .get(
                    url,
                    {
                        headers: { "Authorization": bearer }
                    }
                )
                .then( retorno => {
                    console.log( retorno.data )
                })
    }

    return (
        <div>
            <h2>Área administrativa</h2>
            <Button
                variant="contained"
                color="secondary"
                onClick={ () => handleClick() }
            >
                Carregar usuários
            </Button>
        </div>
    )
}

export default Administrativa