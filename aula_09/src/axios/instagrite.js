import { useState } from 'react'
import axios from 'axios'

const Instagrite = () => {

    const [ photos, setPhotos ] = useState([])

    const carrgarFotos = () => {
        let url = "https://jsonplaceholder.typicode.com/photos"

        axios
            .get( url )
            .then ( retorno => {
                setPhotos( retorno.data )
                console.log(retorno.data)
            })
    }

    const dados = photos.slice(0, 10).map( (linha, key) => {
        return (
            <div key={ key }>
                <img style={{ width: 200 }} src={ linha.thumbnailUrl } />
            </div>
        )
    })

    return (
        <div>
            <h2>Bem vindo ao InstagrITE, o Instagram da ITE</h2>
            <input type="button" onClick={ () => { carrgarFotos() }} value="Carregar" />

            { dados }
        </div>
    )

}

export default Instagrite