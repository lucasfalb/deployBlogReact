import { useState,useEffect } from "react";
import Aside from "../Aside/Aside";
import Feed from "../Feed/Feed";
import "./Style.css";

function Main() {
  const [isLogged, setLogged] = useState(false);

  const [userData, setUserData] = useState({});
  function handleSetUserData(data) {
    setUserData(data);
  }
  async function checkLogged() {
    const getCookie = (name) => {
      var nameEQ = name + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0)
          return c.substring(nameEQ.length, c.length);
      }
      return null;
    };
    let token = getCookie("token");
    if (token) {
      setLogged(true);
      let headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json;charset=UTF-8",
      };
      let url = "https://blog-api-mongodb.vercel.app/checkSession";
      let response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({ token: token }),
      });
      let json = await response.json();
      handleSetUserData(json) 
    } else {
      setLogged(false);
    }
  }
  useEffect(() => {checkLogged()})
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
        <Feed
          isLogged={isLogged}
          doingLogin={doingLogin}
          doingRegister={doingRegister}
          setDoingRegister={setDoingRegister}
          setLogged={setLogged}
          setDoingLogin={setDoingLogin}
        />
        <Aside
          isLogged={isLogged}
          userData={userData}
          toggleDoingLogin={toggleDoingLogin}
          toggleDoingRegister={toggleDoingRegister}
          toggleLogged={toggleLogged}
        />
      </main>
    </>
  );
}
export default Main;
