import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function FromStartBtn() {
  let {resetPage} = useContext(AppContext);
  function clickHandler(){
    resetPage()
  }

  return (
    <button  className='px-3 py-1 text-md text-[1rem] md:text-2xl' onClick={clickHandler}>Read From Start</button>
  )
}
