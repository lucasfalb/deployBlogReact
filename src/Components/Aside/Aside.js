import "./Style.css";
import UserInfo from "../UserInfo/UserInfo";
function Aside({
  isLogged,
  toggleDoingLogin,
  toggleDoingRegister,
  toggleLogged,
  userData
}) {
  return (
    <>
      <aside className="glass">
        <UserInfo
          userData={userData}
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
