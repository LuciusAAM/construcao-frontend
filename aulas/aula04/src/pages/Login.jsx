import BotaoEntrar from '../components/BotaoEntrar';
import Link from '../components/Link';
import Rodape from '../components/Rodape';
import InputEmail from '../components/InputEmail';
import InputSenha from '../components/InputSenha';
import Titulo from '../components/Titulo';
import Logo from '../components/Logo';


function Login() {
    return (
      <>
      <main>
        <Logo/>
        <InputEmail/>
        <InputSenha/>
        <BotaoEntrar/>
        <Link/>
        <Titulo/>
      </main>
      <Rodape />
      </>
    );
  }
  
  
  export default Login;