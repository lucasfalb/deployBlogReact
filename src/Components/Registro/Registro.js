import "./Style.css";
import { useState } from "react";
import React from "react";
import Input from "../Input/Input";
import "../Input/Style.css";

export default function Registro({ doingLogin }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    avatar: "https://blogparallax.vercel.app/avatar-default.jpg",
    active: true,
  });
  function checkInputs() {
    const validatePassword = (password) => {
      const passwordRegex =
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
      return passwordRegex.test(password);
    };
    const errorSpan = document.querySelector(".errorSpan");
    let validatorUsername = /^[a-zA-Z-0-9]+$/;
    errorSpan.style.display = "flex";
    if (formData.name === "") {
      errorSpan.innerHTML = "Ops, algo está inválido: <b>Usuário vazio!</b>";
    } else if (!formData.name.match(validatorUsername)) {
      errorSpan.innerHTML =
        "Ops, algo está inválido: <b>Usuário contém caracter inválido!</b>";
    } else if (formData.email === "") {
      errorSpan.innerHTML = "Ops, algo está inválido: <b>E-mail vazio!</b>";
    } else if (formData.password === "") {
      errorSpan.innerHTML = "Ops, algo está inválido: <b>Senha vazia!</b>";
    } else if (!validatePassword(formData.password)) {
      errorSpan.innerHTML = `Ops, algo está inválido:
        <b>Senha precisa conter no mínimo 8 digitos</b>
        <b>Senha precisa conter uma letra maiúscula</b>
        <b>Senha precisa conter um caracter especial</b>
        <b>Senha precisa conter um número</b>`;
    } else if (formData.passwordConfirm === "") {
      errorSpan.innerHTML =
        "Ops, algo está inválido: <b>Confirme sua senha!</b>";
    } else if (formData.password !== formData.passwordConfirm) {
      errorSpan.innerHTML =
        "Ops, algo está inválido: <b>As senhas não são iguais!</b>";
    } else {
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
    let headers = {
			//"application/x-www-form-urlencoded;charset=UTF-8"
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    };

		var object = {};
		formData.forEach(function(value, key){object[key] = value;});
		var json = JSON.stringify(object);
    fetch(`https://blog-api-mongodb.vercel.app/createUser`, {
      method: "POST",
      headers,
      body: json,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Debug:", data);
      });
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
              name="name"
              value={formData.name}
              onChange={(e) => handleSetData(e, "name")}
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
              name="password"
              value={formData.password}
              onChange={(e) => handleSetData(e, "password")}
              placeholder="************"
              className="inputForm glass"
            />
          </label>
          <label>
            Confirmar senha
            <Input
              type="password"
              name="passwordConfirm"
              value={formData.passwordConfirm}
              onChange={(e) => handleSetData(e, "passwordConfirm")}
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
