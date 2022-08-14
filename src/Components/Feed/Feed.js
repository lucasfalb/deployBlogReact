import FeedContent from "../FeedContent/FeedContent"
import "./Style.css";
export default function Feed({ doingLogin, doingRegister, isLogged }) {
  return (
    <>
      <div className="content glass">
        {doingLogin ? <h1>LOGIN</h1> : <> </>}
        {doingRegister ? <h1>REGISTRO</h1> : <> </>}
        {!doingLogin && !doingRegister ? <FeedContent isLogged={isLogged}/> : <> </>}
      </div>
    </>
  );
}
