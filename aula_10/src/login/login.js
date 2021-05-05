import { useState } from 'react'
import axios from 'axios'

const Login = () => {
    const [ usuario, setUsuario ] = useState()
    const [ senha, setSenha ] = useState()

    const enviarDados = async () => {
        
        var dados = {
            usuario: usuario,
            senha: senha
        }

        var url = "http://127.0.0.1:3001/usuarios/login"
        axios
            .post(
                url,
                dados
            )
            .then( (retorno) =>{
                console.log(retorno)
            })
    }

    return (
        <div>
            <h2>Login</h2>
            <label>Usuário</label>
            <input 
                type="text"
                value={ usuario }
                onChange={ (e) => setUsuario(e.target.value) }
            />
            <br />
            <label>Senha</label>
            <input 
                type="password"
                value={ senha }
                onChange={ (e) => setSenha(e.target.value) }
            />
            <br />
            <br />
            <input type="button" value="Efetuar login"
                onClick={ () => enviarDados() }
            />

        </div>
    )
}

export default Login