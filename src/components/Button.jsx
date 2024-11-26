import React, { createContext, useContext } from 'react'
import Component1 from './components1'
import { counterContext } from '../context/Context'

const button = () => {
  const value = useContext(counterContext)
  return (
    <div>
     
        <button  onClick={() =>value.setCount((count) => count + 1)}><span><Component1 /></span>i am button</button>
    </div>
  )
}

export default button