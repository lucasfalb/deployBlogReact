import "./Style.css";
import UserInfo from "../UserInfo/UserInfo";
function Aside({
  isLogged,
  toggleDoingLogin,
  toggleDoingRegister,
  toggleLogged,
}) {
  return (
    <>
      <aside className="glass">
        <UserInfo
          isLogged={isLogged}
          toggleDoingLogin={toggleDoingLogin}
          toggleDoingRegister={toggleDoingRegister}
          toggleLogged={toggleLogged}
        />
      </aside>
    </>
  );
}
export default Aside;
