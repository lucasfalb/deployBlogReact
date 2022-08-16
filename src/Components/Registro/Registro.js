import "./Style.css";
import { useState } from "react";
import React from "react";
import Input from "../Input/Input";
import "../Input/Style.css";

export default function Registro(doingLogin) {
  const [formData, setFormData] = useState({
    usuario: "",
    email: "",
    senha: "",
    confirmaSenha: "",
  });
  function checkInputs() {
    const errorSpan = document.querySelector(".errorSpan");
    let validatorUsername = /^[a-zA-Z-0-9]+$/;
    errorSpan.style.display = "flex";
    if (formData.usuario === "") {
      errorSpan.innerHTML = "Ops, algo está inválido: <b>Usuário vazio!</b>";
    } else if (!formData.usuario.match(validatorUsername)) {
      errorSpan.innerHTML =
        "Ops, algo está inválido: <b>Usuário contém caracter inválido!</b>";
    } else if (formData.email === "") {
      errorSpan.innerHTML = "Ops, algo está inválido: <b>E-mail vazio!</b>";
    } else if (formData.senha === "") {
      errorSpan.innerHTML = "Ops, algo está inválido: <b>Senha vazia!</b>";
    } else if (formData.confirmaSenha === "") {
      errorSpan.innerHTML =
        "Ops, algo está inválido: <b>Confirme sua senha!</b>";
    } else if (formData.senha !== formData.confirmaSenha) {
      errorSpan.innerHTML =
        "Ops, algo está inválido: <b>As senhas não são iguais!</b>";
    }else{
      errorSpan.style.display = "none";
    }
  }
  function handleSetData(e, key) {
    e.preventDefault();
    setFormData({ ...formData, [key]: e.target.value });
  }

  async function handleForm(event) {
    event.preventDefault();
    console.log(formData);
    checkInputs();
    fetch(`https://blog-api-mongodb.vercel.app/createUser`, {
    method: "POST",
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: formData,
    }).then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    
  }
  return (
    <>
      <section className="registro-main">
        <h2>Hey, seja bem vind@!</h2>
        <h3>Preencha os campos abaixo para se cadastrar:</h3>
        <form onSubmit={handleForm}>
          <label>
            Usuário
            <Input
              type="text"
              name="usuario"
              value={formData.usuario}
              onChange={(e) => handleSetData(e, "usuario")}
              placeholder="lucasfalb"
              className="inputForm glass"
            />
          </label>
          <label>
            Email
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => handleSetData(e, "email")}
              placeholder="lucas@falb.com"
              className="inputForm glass"
            />
          </label>
          <label>
            Senha
            <Input
              type="password"
              name="senha"
              value={formData.senha}
              onChange={(e) => handleSetData(e, "senha")}
              placeholder="************"
              className="inputForm glass"
            />
          </label>
          <label>
            Confirmar senha
            <Input
              type="password"
              name="confirmaSenha"
              value={formData.confirmaSenha}
              onChange={(e) => handleSetData(e, "confirmaSenha")}
              placeholder="************"
              className="inputForm glass"
            />
          </label>
          <label className="checkBox">
            <input type="checkbox" name="termos" required />
            Aceito os <a href="/">termos de serviço.</a>
          </label>
          <span className="errorSpan"></span>
          <button id="button">Finalizar cadastro</button>
        </form>
      </section>
    </>
  );
}
