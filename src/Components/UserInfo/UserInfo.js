import AsideDeslogado from "../AsideDeslogado/AsideDeslogado";
import "./Style.css";
export default function UserInfo({
  isLogged,
  toggleLogged,
  toggleDoingLogin,
  toggleDoingRegister,
}) {
  return (
    <>
      {isLogged ? (
        <>
          <img src="assets/imgs/avatar.jpg" alt="avatar" />
          <h1>@username</h1>
          <p>about-me.</p>
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
