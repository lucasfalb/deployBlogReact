import React from 'react'
import './Style.css'
export default function Input({type, placeholder, name}) {
  return (
    <input type={type} placeholder={placeholder} name={name} className='inputForm glass' />
  )
}
