import { useState } from 'react'

import Menu from './menu'
import Conteudo from './conteudo'

import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'

import { temaClaro, temaEscuro } from './theme/theme'

const App = () => {

    const [ tema, setTema ] = useState( temaEscuro )
    const [ escuro, setEscuro ] = useState( true )

    const alterarTema = () => {
        console.log("chegou")
        if (escuro) 
            setTema( temaClaro )
        else
            setTema( temaEscuro )

        setEscuro( !escuro )
    }

    return (
        <ThemeProvider theme={ tema }>
            <CssBaseline />
            <Menu tema={ alterarTema } />
            <Conteudo />            
        </ThemeProvider>
    )
}

export default App