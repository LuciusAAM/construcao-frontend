import { useState } from "react";
import Botao from "../components/Botao";
import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";


function FormLogin(props){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const aoClicar = (e) => {
        e.preventDefault();
        props.navegaPara("/home")
        // faz chamada no backend
    }

    return (
        <>
        <InputEmail valor={email} mudaValor={setEmail} />
        <InputSenha valor={senha} mudaSenha={setSenha}/>
        <Botao texto="Entrar" aoClicar={aoClicar} />
        </>
    );
}



export default FormLogin;