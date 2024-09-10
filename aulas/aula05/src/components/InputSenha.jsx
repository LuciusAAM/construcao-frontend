function InputSenha(props) {
  return (
    <>
      <label htmlFor="senha">Senha</label>
      <input
        type="password"
        id="senha"
        name="senha"
        value={props.valor}
        onChange={(e) => props.mudaSenha(e.target.value)}
        required
      />
    </>
  );
}

export default InputSenha;
