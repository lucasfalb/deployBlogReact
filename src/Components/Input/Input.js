import React from "react";
import "./Style.css";
export default function Input({ type, placeholder, name,onChange, ...rest}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      className="inputForm glass"
      {...rest}
    />
  );
}
