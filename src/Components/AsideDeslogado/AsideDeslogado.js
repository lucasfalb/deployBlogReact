import React from "react";
import ButtonClick from "../buttonClick/buttonClick";
export default function AsideDeslogado({
  toggleLogged,
  toggleDoingLogin,
  toggleDoingRegister,
}) {
  return (
    <>
      <h1>Seja bem vind@!</h1>
      <p>
        blogParallax, aqui você encontra posts diversos, com conteúdo
        colaborativo.
      </p>
      <label className="label-AsideDeslogado">
        Já tem uma conta?
        <ButtonClick
          toggleDoingLogin={toggleDoingLogin}
          texto="Fazer login"
          onClick={toggleDoingLogin}
        />
      </label>
      <label className="label-AsideDeslogado">
        Não? Registre-se
        <ButtonClick
          toggleDoingRegister={toggleDoingRegister}
          onClick={toggleDoingRegister}
          texto="Criar uma conta"
        />
      </label>
    </>
  );
}
