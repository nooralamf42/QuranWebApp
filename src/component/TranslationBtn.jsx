import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function TranslationBtn() {
    let {setShowTranslation, showTranslation} = useContext(AppContext)
    console.log("on click translation value", showTranslation)
    function clickHandler(){
        setShowTranslation(pre=>!pre)
    }
  return (
    <button className='px-3 py-2 bg-green-500'
        onClick={clickHandler}
        >
        {showTranslation? `Hide Translation`: `Show Translation`}
    </button>
  )
}
