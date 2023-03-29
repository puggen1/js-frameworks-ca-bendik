import React from 'react'
import { Button as DefaultButton } from './style'
const Button = ({text, onClickFunction, extraClass}) => {
  return (
    <DefaultButton className={"button " + extraClass} onClick={onClickFunction ? (e)=>{onClickFunction(e)}: null}>{text}</DefaultButton>
  )
}

export default Button