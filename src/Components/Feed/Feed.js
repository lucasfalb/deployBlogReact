import FeedContent from "../FeedContent/FeedContent";
import Login from "../Login/Login";
import PostMaker from "../PostMaker/PostMaker";
import Registro from "../Registro/Registro";
import EditUser from "../UserInfo/EditUser";

import "./Style.css";
export default function Feed({
  doingLogin,
  doingRegister,
  isLogged,
  setLogged,
  userData,
  setDoingLogin,
  setDoingRegister,
  editingUser,
  doingNewPost,
}) {
  return (
    <>
      <div className="content glass">
        {!doingLogin && !doingRegister && !doingNewPost && !editingUser ? (
          <FeedContent isLogged={isLogged} userData={userData} />
        ) : (
          <> </>
        )}

        {editingUser ? <EditUser /> : <> </>}
        {doingLogin ? (
          <Login
            doingRegister={doingRegister}
            isLogged={isLogged}
            setLogged={setLogged}
            setDoingLogin={setDoingLogin}
          />
        ) : (
          <> </>
        )}

        {doingNewPost ? (
          <PostMaker />
        ) : (
          <> </>
        )}

        {doingRegister ? (
          <Registro
            doingRegister={doingRegister}
            isLogged={isLogged}
            setLogged={setLogged}
            setDoingRegister={setDoingRegister}
          />
        ) : (
          <> </>
        )}
      </div>
    </>
  );
}
