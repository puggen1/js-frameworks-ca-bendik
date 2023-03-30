import React from 'react'
import { Error } from './style'
const ErrorResponse = ({message}) => {
  return (
    <Error>{message ? message : null}</Error>
  )
}

export default ErrorResponse