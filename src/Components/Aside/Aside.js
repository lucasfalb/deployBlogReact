import "./Style.css";
import UserInfo from "../UserInfo/UserInfo";
function Aside({
  isLogged,
  toggleDoingLogin,
  toggleDoingRegister,
  toggleLogged,
  userData,
  toggleEditingUser,
  toggleDoingNewPost
}) {
  return (
    <>
      <aside className="glass">
        <UserInfo
          toggleDoingNewPost={toggleDoingNewPost}
          userData={userData}
          isLogged={isLogged}
          toggleDoingLogin={toggleDoingLogin}
          toggleDoingRegister={toggleDoingRegister}
          toggleLogged={toggleLogged}
          toggleEditingUser={toggleEditingUser}
        />
      </aside>
    </>
  );
}
export default Aside;
