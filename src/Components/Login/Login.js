import "./Style.css";
import { React, useState } from "react";
import Input from "../Input/Input";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  }

  function checkInputs() {
    const errorSpan = document.querySelector(".errorSpan");
    errorSpan.style.display = "flex";
    if (email === "") {
      errorSpan.innerHTML = "Ops, algo está inválido: <b>E-mail vazio!</b>";
    } else if (password === "") {
      errorSpan.innerHTML = "Ops, algo está inválido: <b>Senha vazia!</b>";
    } else {
      errorSpan.style.display = "none";
    }
  }

  async function handleForm(event) {
    event.preventDefault();
    checkInputs();

    let headers = {
      'Access-Control-Allow-Origin': '*',
      "Content-Type": "application/json;charset=UTF-8",
    };
    
    let response = await fetch("https://blog-api-mongodb.vercel.app/authenticate", {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        "email": email,
        "password": password,
      }),
    })

    let json = await response.json();

    console.log(json);
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
              onChange={handleEmailInput}
              placeholder="lucas@falb.com"
            />
          </label>
          <label>
            Senha
            <Input
              type="password"
              name="password"
              onChange={handlePasswordInput}
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
