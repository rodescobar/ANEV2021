import { TextField, Button, CircularProgress } from '@material-ui/core'
import{ useState } from 'react'
import axios from 'axios'

const Login = () => {

    const [ carregar, setCarregar ] = useState(false)
    const [ usuario, setUsuario ] = useState()
    const [ senha, setSenha ] = useState()

    const efetuarLogin = async () => {
        setCarregar(true)

        let url = "https://professor-artin.herokuapp.com/login"
        var data = { 
            usuario: usuario, 
            senha
        }

        await axios.post(
            url,
            data
        )
            .then( (retorno) => {
                
                if (retorno.data.token) {
                    alert("Login efetuado com sucesso")
                    localStorage.setItem("NossoToken", retorno.data.token)
                }

                if (retorno.data.token === undefined)
                    alert(retorno.data)

                setCarregar(false)
            })
    }

    return (
        <div>
            <h1>Login</h1>
            <div>
                <TextField
                    label="Usuário"
                    name="usuario"
                    value={ usuario }
                    onChange={ (e) => setUsuario(e.target.value)}
                />
                <TextField
                    label="Senha"
                    name="senha"
                    type="password"
                    value={ senha }
                    onChange={ (e) => setSenha(e.target.value)}
                />
                <br/>
                {
                    (carregar)?(<CircularProgress color="secondary"/>):("")
                }

                <Button
                    color="primary"
                    variant="contained"
                    onClick={ () => efetuarLogin() }
                >
                    Enviar
                </Button>
            </div>
        </div>
    )
}

export default Login