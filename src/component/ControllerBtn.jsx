import React, { useState } from 'react'
import {SlOptionsVertical} from 'react-icons/sl'
import {AiOutlineClose} from 'react-icons/ai'
import FromStartBtn from './FromStartBtn'
import FromBookmarkBtn from './FromBookmarkBtn'

export default function ControllerBtn() {
    let [isClicked, setIsClicked] = useState(false)

    function clickHandler(){
      setIsClicked(pre=>!pre)
    }

  return (
    <div>
        <>
            <button className={`bg-green-200 p-2 rounded-full fixed left-5 top-7 z-10 ease-in-out duration-200 ${isClicked && 'ml-[205px] left-[-59px] p-1 md:p-2 md:left-1'}`} onClick={clickHandler}>
                {
                    isClicked?
                    <AiOutlineClose/> :
                    <SlOptionsVertical/>
                }
            </button>

            <div className={`ease-in-out rounded-md border p-2 bg-white duration-200 fixed top-5 left-0 flex flex-col items-start ${isClicked? 'translate-x-0' : 'translate-x-[-100%]'}`}>
                <FromStartBtn/>
                <FromBookmarkBtn/>
            </div>
        </>

    </div>
  )
}
