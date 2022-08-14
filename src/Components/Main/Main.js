import { useState } from "react";
import Aside from "../Aside/Aside";
import Feed from "../Feed/Feed";
import "./Style.css";
function Main() {
  const [isLogged, setLogged] = useState(false);
  function toggleLogged() {
    setLogged(!isLogged);
  }
  const [doingLogin, setDoingLogin] = useState(false);
  function toggleDoingLogin() {
    setDoingLogin(!doingLogin);
    setDoingRegister(false);
  }
  const [doingRegister, setDoingRegister] = useState(false);
  function toggleDoingRegister() {
    setDoingRegister(!doingRegister);
    setDoingLogin(false);
  }
  return (
    <>
      <main className="main">
        <Feed isLogged={isLogged} doingLogin={doingLogin} doingRegister={doingRegister}/>
        <Aside
          isLogged={isLogged}
          toggleDoingLogin={toggleDoingLogin}
          toggleDoingRegister={toggleDoingRegister}
          toggleLogged={toggleLogged}
        />
      </main>
    </>
  );
}
export default Main;
