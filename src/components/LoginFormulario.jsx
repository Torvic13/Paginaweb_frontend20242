import { useState } from "react"
import EntradaDatos from "./EntradaDatos"

const LoginFormulario = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")



    return <>
        <h1>
            {
                props.modo === "login"? "Login" : "Registro Usuario"
            }
        </h1> 
        <form>
            <EntradaDatos 
                key={ "input_username" }
                label="Usuario: " 
                tipo="entrada"
                valor={ username }
                setValor={ setUsername }/>
            <EntradaDatos 
                key={ "input_password" }
                label="Password:" 
                tipo="password"
                valor={ password }
                setValor={ setPassword }/>
            <div>
                <button type="button" className="btn btn-success"
                    onClick={ () => {
                        props.loginOnClick(username, password)
                    } }>
                    {
                        props.modo === "login"? "Login" : "Guardar"
                    }
                </button>
            </div>
        </form>
    </>
}

export default LoginFormulario