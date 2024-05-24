'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function page() {
  const [url, setUrl] = useState('')
  const router = useRouter()

  return (
    <>
      <div className='w-screen h-[5vh] flex items-center border-b-black border-b'>
        <a href="./">
          <span className='ml-[3vw] mr-[1vw] text-3xl text-bold text-red-600 font-bold'>Auto Avenue</span>
        </a>
      </div>
      <div className='w-screen h-[95vh] flex flex-col justify-center items-center'>
        <h1 className='text-3xl'>Please choose location</h1>
        <div className='flex'>
          <select className='p-4 rounded border-2 border-slate-500 mt-4 w-60 h-16 text-lg' onChange={(e) => {setUrl('/listings/' + e.target.value)}} name="location" id="location">
            <option value="">Select location</option>
            <option value="all">All</option>
            <option value="nykarleby">Nykarleby</option>
            <option value="jakobstad">Jakobstad</option>
            <option value="vasa">Vasa</option>
          </select>
          <button className='bg-blue-500 hover:bg-blue-700 text-white text-lg h-16 p-2 rounded ml-4 mt-4' type='submit' onClick={() => {router.push(url)}}>Submit</button>
        </div>
      </div>
    </>
  )
}
