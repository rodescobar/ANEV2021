import { useState } from 'react'

import Menu from './menu'
import Conteudo from './conteudo'

import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'

import { temaClaro, temaEscuro } from '../theme/theme'


import RecebendoVariavel from './RecebendoVariavel'
import Tabela from './Tabela'
import DevolvendoItem from './DevolvendoItem'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Site = () => {

    const [ tema, setTema ] = useState( temaEscuro )
    const [ escuro, setEscuro ] = useState( true )
    const [ valorFilho, setValorFilho ] = useState("")

    const alterarTema = () => {
        if (escuro) 
            setTema( temaClaro )
        else
            setTema( temaEscuro )

        setEscuro( !escuro )
    }

    const recebeValor = ( num ) => {
        setValorFilho( num )
    }

    return (
        <ThemeProvider theme={ tema }>
            <CssBaseline />
            <Menu tema={ alterarTema } />
            <Carousel
                autoplay={ true }
                infiniteLoop={ true }
                interval={ 2000 }
            >
                <div>
                    <img alt="1" src="https://segredosdomundo.r7.com/wp-content/uploads/2020/03/13-atitudes-que-difere-as-pessoas-felizes-das-outras.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img alt="1"  src="https://media.istockphoto.com/photos/happy-people-drinking-and-having-fun-at-beach-picture-id826055344" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img alt="1"  src="http://s2.glbimg.com/iuObrn-vl7G7LxgTnnIRdkOSWkU=/620x430/e.glbimg.com/og/ed/f/original/2016/07/08/jovens.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>

            <DevolvendoItem 
                numero={ 35 }
                retorno={ recebeValor }
            />
            <hr />
            <RecebendoVariavel 
                rec_variavel={ "Isso é uma variável de pai pra filho" }
                teste = { 58 }
                valor_novo={ valorFilho }
            />
            <Conteudo />            
        </ThemeProvider>
    )
}

export default Site