import { useState } from 'react'
import "./styles.css"

const App = () => {

  const [ lista, setLista ] = useState([])
  const [ nome, setNome ] = useState()
  const [ telefone, setTelefone ] = useState()

  const  todaLista = lista.map((item , key) =>{
    return(
      <li> { item} </li>
    )
  })

  const addNome = () => {
     setLista( x => [ ...lista, nome])
     console.log(lista)
  }
  
  const addTelefone = () => {
    setLista( y=> [ ...lista, telefone])
    console.log(lista)
 }

  return (
        <div >
            <h2>Primeira lista de exercícios</h2>
          <div>
            <span>Digite o nome: </span>
            <input 
                 style={ {borderRadius: "10px", borderColor: "rgb(30, 178, 247)", margin: "5", backgroundColor: "rgb(139, 193, 218" } }
                type="text" 
                size="20"
                value= { nome } 
                onChange={ (e) => setNome(e.target.value)}/> 
              
            <span>    </span> 
            <input 
                style={ { background: "white", color: "rgb(30, 178, 247)", borderRadius: "10px", borderColor: "rgb(30, 178, 247)" }}
                type = "button"
                value= "Adicionar"
                onClick= { () => addNome()}/>
            
            <br/>
          
            <span> Digite o telefone: </span>
            <input
                style={ {borderRadius: "10px", borderColor: "rgb(30, 178, 247)", margin: "5", backgroundColor: "rgb(139, 193, 218" } }
                type="text"
                size="15"
                value= { telefone }
                onChange={ (e) => setTelefone(e.target.value)}/>

            <span>    </span>    
            <input
                style={ { background: "white", color: "rgb(30, 178, 247)", borderRadius: "10px", borderColor: "rgb(30, 178, 247)" }}
                type = "button"
                value= "Adicionar"
                onClick= { () => addTelefone()}/>
           
            <ul>  
              <input
                style={ {borderRadius: "20px",
                       backgroundColor: 'tomato',
                       borderColor: "black",
                       color: 'darkblue',
                       padding: '10px',
                       width: '80% content-box',
                       marginTop: '40px',
                       textAlign: 'center'
                }}
                type="text"
                size='50'
                value= {lista}
               />
            </ul>
          </div>
        </div>
  )
}

export default App