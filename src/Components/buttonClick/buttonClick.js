import React from "react";
export default function ButtonClick({toggleDoingLogin,toggleDoingRegister, texto}) {
  return <button onClick={toggleDoingLogin || toggleDoingRegister} >{texto}</button>;
}
