import "./Style.css";
import { useState } from "react";
import React from "react";
import Input from "../Input/Input";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  function checkInputs() {
    const errorSpan = document.querySelector(".errorSpan");
    errorSpan.style.display = "flex";
    if (formData.email === "") {
      errorSpan.innerHTML = "Ops, algo está inválido: <b>E-mail vazio!</b>";
    } else if (formData.password === "") {
      errorSpan.innerHTML = "Ops, algo está inválido: <b>Senha vazia!</b>";
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
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    };
    fetch(`https://blog-api-mongodb.vercel.app/authenticate`, {
      method: "POST",
      headers,
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Debug:", data);
      });
  }
  return (
    <>
      <section className="login-main">
        <h2>Hey, bem vind@ novamente!</h2>
        <h3>Preencha os campos abaixo para logar:</h3>
        <form onSubmit={handleForm}>
          <label>
            Usuário
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => handleSetData(e, "email")}
              placeholder="lucas@falb.com"
            />
          </label>
          <label>
            Senha
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={(e) => handleSetData(e, "password")}
              placeholder="*************"
            />
          </label>
          <span className="errorSpan"></span>
          <button>Fazer login</button>
        </form>
      </section>
    </>
  );
}
