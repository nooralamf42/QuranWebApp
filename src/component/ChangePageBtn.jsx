import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function ChangePageBtn({name,type}) {
    let {pageChangeHandler, page} = useContext(AppContext) 
  return (
    <button 
    className={`px-3 py-2 border ${page<2 && type===-1 && "hidden"}`}
    onClick={()=>pageChangeHandler(type)}>
        {name}
    </button>
  )
}
