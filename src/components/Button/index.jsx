import React from 'react'
import { Button as DefaultButton } from './style'
const Button = ({text, onClickFunction, extraClass, type}) => {
  return (
    <DefaultButton className={"button " + extraClass ? extraClass : null} onClick={onClickFunction ? (e)=>{onClickFunction(e)}: null} type={type ? type : null}>{text}</DefaultButton>
  )
}

export default Button