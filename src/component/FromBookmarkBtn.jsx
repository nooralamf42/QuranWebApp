import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'


export default function FromBookmarkBtn() {
  let {resetPage} = useContext(AppContext);
  function clickHandler(){
    resetPage(true)
  }

  return (
    <button  className='px-3 py-1 text-md border-t text-[1rem] md:text-2xl' onClick={clickHandler}>Read From Bookmark</button>
  )
}
