import { useState, useEffect } from 'react'
import axios from 'axios'

const Instagrite = () => {

    //ComponentDidMount
    //ComponentdidUnmount

    const [ photos, setPhotos ] = useState([])
    const [ texto, setTexto ] = useState("")

    //Só é funcional no momento da inicialização do componente.
    useEffect(() => {
        console.log("Carregou useEffect na inicialização")
        carrgarFotos()
    },[])

    //useEffect( <programacao>, [ ] )

    useEffect(() =>{
        console.log("Alteração no texto")
    }, [ texto ])

    useEffect(() => {
        console.log("tudo")
    })

    const carrgarFotos = () => {
        let url = "https://jsonplaceholder.typicode.com/photos"

        axios
            .get( url )
            .then ( retorno => {
                setPhotos( retorno.data )
                //console.log(retorno.data)
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
            <input type="text"
                value={ texto }
                onChange={ (e) => setTexto(e.target.value) }
            />
            <input type="button" onClick={ () => { carrgarFotos() }} value="Carregar" />

            { dados }
        </div>
    )

}

export default Instagrite