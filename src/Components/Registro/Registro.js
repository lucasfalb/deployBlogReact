import './Style.css'
import React from 'react'
import Input from '../Input/Input'

export default function Registro() {
  return (
    <>
      <section className="registro-main">
        <h2>Hey, seja bem vind@!</h2>
        <h3>Preencha os campos abaixo para se cadastrar:</h3>
        <form>
          <label>
            Usuário
            <Input type="text" name="usuario"  placeholder="lucasfalb" />
          </label>
          <label>
            Email
            <Input type="email" name="email"  placeholder="lucas@falb.com" />
          </label>
          <label>
            Senha
            <Input type="password" name="senha"  placeholder="************" />
          </label>
          <label>
            Confirmar senha
            <Input type="password" name="confirma-senha"  placeholder="************" />
          </label>
          <label  className="checkBox">
          <input type="checkbox" name="termos" />
          Aceito os <a href="/">termos de serviço.</a>
          </label>
          <button>Finalizar cadastro</button>
        </form>
      </section>
    </>
  )
}
