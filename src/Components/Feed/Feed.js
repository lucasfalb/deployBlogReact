import FeedContent from "../FeedContent/FeedContent"
import Login from "../Login/Login";
import Registro from "../Registro/Registro";
import "./Style.css";
export default function Feed({ doingLogin, doingRegister, isLogged }) {
  return (
    <>
      <div className="content glass">
        {doingLogin ? <Login /> : <> </>}
        {doingRegister ? <Registro /> : <> </>}
        {!doingLogin && !doingRegister ? <FeedContent isLogged={isLogged}/> : <> </>}
      </div>
    </>
  );
}
