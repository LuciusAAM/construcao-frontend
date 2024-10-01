import { useForm } from "react-hook-form";
import InputSenha from "../components/InputSenha";
import InputEmail from "../components/InputEmail";
import Botao from "../components/Botao";

function FormLogin() {
  const {
    register,
    handleSubmit,
    formstate: { errors },
  } = useForm();


    return (
        <>
        <form onSubmit={handleSubmit((data) => { })}>
            <InputEmail register={register}  error={erros.email}  />
            <InputSenha register={register}  error={erros.senha}  />
            <Botao texto="Entrar"/>

        </form>
        </>
    )
}
    export default FormLogin; 