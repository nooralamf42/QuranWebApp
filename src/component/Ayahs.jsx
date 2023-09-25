import React, { useContext } from 'react'
import { AppContext} from '../context/AppContext'

export default function Ayahs() {
  let {ayah, translatedAyah, showTranslation, loading} = useContext(AppContext)
  let combinedAyahs = ayah.map((ayah, index)=>[ayah,translatedAyah[index]])
  console.log(translatedAyah)

      return(
        loading? <h1>Content is loading...</h1> :
        showTranslation ?
          combinedAyahs.map((aya,index)=>{
            return(<div><span>{aya[0].text}</span><p className='text-sm text-gray-500'>{aya[1]?.text}</p></div>)
          }) :
          ayah.map(ayah=><span>{ayah?.text}</span>)
        )
}
