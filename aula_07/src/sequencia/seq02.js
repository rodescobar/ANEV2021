import React from 'react'

const Seq02 = () => {
    const [ nome, setNome ] = React.useState()
    const [ endereco, setEndereco ] = React.useState()

    const Salvar = () => {
        console.log("Salvar os dados")
        console.log(nome)
        console.log(endereco)
    }

    return (
        <div style={ { background: "rgba(0, 0, 0, 0.8 )", color: "tomato" } }>
            <span>Nome: </span>
            <input 
                style={{ borderRadius: "10px", padding: "5px", margin: 10 }}
                type="text" 
                value = { nome }
                onChange = { (e) => setNome(e.target.value) }
            />
            
            <br/>

            <span>Endereço: </span>
            <input 
                type="text" 
                value = { endereco }
                onChange = { (e) => setEndereco(e.target.value) }
            />
            
            <br/>

            <input 
                style={{ background: "green", color: "white", borderRadius: "10px", borderColor: "red" }}
                type="button" 
                value="Salvar"
                onClick={ () => Salvar() }
            />
        </div>
    )
}

export default Seq02