import React, { useContext, useState} from 'react'
import { AppContext} from '../context/AppContext'
import { useEffect } from 'react';

export default function Ayahs() {
  let {data,loading, pageChangeHandler} = useContext(AppContext)
  let [bookmarkAyah, setBookmarkAyah] = useState(localStorage.getItem("bookmarkedAyah"))
  let bookmarkedPage = localStorage.getItem("bookmark")

  function scrollHandler (){
    let docOffsetHeight = document.documentElement.offsetHeight;
    let windowHeight = window.innerHeight;
    let scrollHeight = document.documentElement.scrollTop;
    
    let totalHeightOnScroll = windowHeight + scrollHeight+150;

    if(docOffsetHeight < totalHeightOnScroll){
      pageChangeHandler()
    }

  }

  function addBookmark(e){
      localStorage.setItem("bookmark", e.target.id)
      setBookmarkAyah(e.target.getAttribute("ayah"))
      localStorage.setItem("bookmarkedAyah", e.target.getAttribute("ayah"))
  }

  useEffect(()=>{
    window.addEventListener("scroll", scrollHandler)
    return ()=>window.removeEventListener("scroll", scrollHandler)}
    , []
  )

      return(
        loading? <h1>Content is loading...</h1> :
  
            data.map(innerData=>innerData.map((ayah)=>
              {
                return ayah.text.includes('بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ') ? ayah.text.split('بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ').length>1? <>

                <p className='font-bold text-3xl my-5'>بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</p>

                <span >
                  {ayah.text.split('بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ')[1]}
                  <span className={`border border-gray-400 mx-2 w-3 aspect-square inline-block text-xs rounded-full ${ayah.number===1 ? 'hidden' : ''}`}></span>
                  </span>
                </>
                 : 
                 <p className='font-bold'><span className={`border border-gray-400 mx-2 w-3 aspect-square inline-block text-xs rounded-full ${ayah.number===1 ? 'hidden' : ''}`}>{}</span>{ayah.text}</p>  
                : 
                <span >
                  {ayah.text}
                  <span id={ayah.page} ayah={ayah.number} onClick={(e)=>addBookmark(e)}
                  className={`border border-gray-400 mx-2 w-3 aspect-square cursor-pointer inline-block text-xs rounded-full 
                  ${ayah.page == bookmarkedPage && ayah.number == bookmarkAyah ? 'bg-green-400 scale-150' : ""}
                  `}>{}</span>
                  </span>
                
              }
            
              ))
       
 
          
        )
}
