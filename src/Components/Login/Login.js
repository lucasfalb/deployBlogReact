import './Style.css'
import React from 'react'
import Input from '../Input/Input'

export default function Login() {
  return (
    <>
      <section className="login-main">
        <h2>Hey, bem vind@ novamente!</h2>
        <h3>Preencha os campos abaixo para logar:</h3>
        <form>
          <label>
            Usuário
            <Input type="text" name="usuario"  placeholder="lucasfalb" />
          </label>
          <label>
            Senha
            <Input type="email" name="senha"  placeholder="*************" />
          </label>
          <button>Fazer login</button>
        </form>
      </section>
    </>
  )
}
