import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center h-[100vh]'>
        <h1 className="text-6xl">Read Quran</h1>
        <Link to="/read" className='text-2xl mt-4 hover:scale-125 duration-300 ease-in-out'>Click here to read</Link>
    </div>
  )
}
