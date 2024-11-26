import React from 'react'
import { useContext } from 'react'
import { counterContext } from '../context/Context'

const components1 = () => {
  const value = useContext(counterContext)
  return (
    <div>
       {value.count}
    </div>
  )
}

export default components1