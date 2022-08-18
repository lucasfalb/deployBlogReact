import AsideDeslogado from "../AsideDeslogado/AsideDeslogado";
import ButtonClick from "../buttonClick/buttonClick";
import "./Style.css";
import React from "react";
export default function UserInfo({
  isLogged,
  toggleLogged,
  toggleDoingLogin,
  toggleDoingRegister,
  userData,
  toggleEditingUser,
  toggleDoingNewPost,
}) {
  const logoff = () => {
    document.cookie = "token=; Max-Age=-1;";  
    toggleLogged();
    toggleDoingLogin();
  }

  return (
    <>
      {isLogged ? (
        <>
          <img id="avatar" src={userData.avatar} alt="avatar" />
          <h1>@{userData.name}</h1>
          <p>{userData.biography}</p>
          <label className="label-AsideDeslogado">
            <ButtonClick
              texto="Novo post 📑"
              toggleDoingNewPost={toggleDoingNewPost}
              onClick={toggleDoingNewPost}
            />
          </label>
          <label className="label-AsideDeslogado">
            <ButtonClick
              texto="Editar dados ✍️"
              onClick={toggleEditingUser}
              toggleEditingUser={toggleEditingUser}
            />
          </label>
          <label className="label-AsideDeslogado">
            <ButtonClick
              logoff={logoff}
              texto="Sair ❌"
              onClick={logoff}
            />
          </label>
        </>
      ) : (
        <>
          <AsideDeslogado
            toggleLogged={toggleLogged}
            toggleDoingLogin={toggleDoingLogin}
            toggleDoingRegister={toggleDoingRegister}
          />
        </>
      )}
    </>
  );
}
