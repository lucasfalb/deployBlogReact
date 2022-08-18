import AsideDeslogado from "../AsideDeslogado/AsideDeslogado";
import "./Style.css";
export default function UserInfo({
  isLogged,
  toggleLogged,
  toggleDoingLogin,
  toggleDoingRegister,
  userData,
}) {

  return (
    <>
      {isLogged ? (
        <>
          <img id="avatar" src={userData.avatar} alt="avatar" />
          <h1>@{userData.name}</h1>
          <p>{userData.biography}</p>
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
