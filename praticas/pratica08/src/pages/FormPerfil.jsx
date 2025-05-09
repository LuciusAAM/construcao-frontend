import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";
import InputNome from "../components/InputNome"
import Botao from "../components/Botao";


function FormPerfil() {
  const {id} = useParams()

  const onSubmit = (data) => {
    console.log(data);
  }
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>

      <InputNome register={register} error={errors.nome} />
      <InputEmail register={register} error={errors.email} />
      <InputSenha register={register} error={errors.senha} />

      <Botao texto="Salvar" />

      </form>
    </>
  );
}

export default FormPerfil;
