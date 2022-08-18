import AsideDeslogado from "../AsideDeslogado/AsideDeslogado";
import ButtonClick from "../buttonClick/buttonClick";
import { useState, useEffect } from "react";
import React from "react";
import Input from "../Input/Input";
import "./EditUserStyle.css";

export default function EditUser({ visibility }) {
  //const [editDadosVisibility, setEditDadosVisibility] = useState(false);

  return (
    <>
      <section className="editar-user-main">
        <h3>Editar post:</h3>
        <form>
					<label>
						Imagem
            <Input
              type="file"
							accepet="image/png, image/jpeg"
              name="imagem"
              className="inputForm glass"
            />
          </label>
          <label>
						Nome
            <Input
              type="text"
              name="name"
              className="inputForm glass"
            />
          </label>
					<label>
            Biografia
            <Input
              type="text"
              name="biografia"
              placeholder="Bio"
              className="inputForm glass"
            />
          </label>
          <label>
            Email
            <Input
              type="email"
              name="email"
              placeholder="lucas@falb.com"
              className="inputForm glass"
            />
          </label>
          <label>
            Senha
            <Input
              type="password"
              name="password"
              placeholder="************"
              className="inputForm glass"
            />
          </label>
          <span className="errorSpan"></span>
          <button id="button">Salvar</button>
        </form>
      </section>
    </>
  );
}
