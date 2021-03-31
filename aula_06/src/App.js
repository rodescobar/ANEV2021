import Botoes from './Botoes'
import Tabela from './Tabela'

import Alunos from './Data.json'
import Cursos from './Cursos.json'

const App = () => {

    return (
        <div>
            <div>Olááá mundão véi!!!</div>
            <Botoes nome="Contar Comp 01"/> 
            <br />
            <Botoes nome="Contador X"/> 
            <br />
            <Tabela data={ Alunos } />

            <Tabela data={ Cursos } />
        </div>
    )
}

export default App