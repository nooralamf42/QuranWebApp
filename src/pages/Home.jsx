import React from 'react'
import Ayahs from '../component/Ayahs'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='text-center mt-40 '>
        <h1 className="text-3xl">Read Quran</h1>
        <Link to="/page=1">Click here to read</Link>
    </div>
  )
}
