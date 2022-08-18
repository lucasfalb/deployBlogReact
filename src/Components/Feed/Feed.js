import FeedContent from "../FeedContent/FeedContent"
import Login from "../Login/Login";
import Registro from "../Registro/Registro";
import "./Style.css";
export default function Feed({ doingLogin, doingRegister, isLogged,setLogged, setDoingLogin, setDoingRegister }) {
  return (
    <>
      <div className="content glass">
        {doingLogin ? <Login doingRegister={doingRegister} isLogged={isLogged} setLogged={setLogged}  setDoingLogin={setDoingLogin} /> : <> </>}
        {doingRegister ? <Registro doingRegister={doingRegister} isLogged={isLogged} setLogged={setLogged}  setDoingRegister={setDoingRegister} /> : <> </>}
        {!doingLogin && !doingRegister ? <FeedContent isLogged={isLogged}/> : <> </>}
      </div>
    </>
  );
}
