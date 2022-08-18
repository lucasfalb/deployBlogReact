import React from "react";
export default function ButtonClick({toggleDoingLogin,toggleDoingRegister,toggleDoingNewPost,toggleEditingUser, texto}) {
  return <button onClick={toggleDoingLogin || toggleDoingRegister || toggleDoingNewPost || toggleEditingUser} >{texto}</button>;
}
