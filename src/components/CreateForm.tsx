'use client'
import { saveListing } from '@/utils/handleDatabase'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'



export default function CreateForm() {
    const [imgURL, setImgURL] = useState('')
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [brand, setBrand] = useState('')
    const [model, setModel] = useState('')
    const [year, setYear] = useState('')
    const [mileage, setMileage] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')

    const router = useRouter()

    const handleSubmit = () => {
        console.log('submit');
        const data = [
          title, 
          brand, 
          model, 
          Number(mileage), 
          description, 
          location.toLowerCase(), 
          number, 
          email, 
          Number(price), 
          Number(year),
          imgURL
        ]
        saveListing(data)
        router.push('./')
    }

  return (
    <>
    <div className='w-screen h-[5vh] flex items-center border-b-black border-b'>
      <a href="./">
        <span className='ml-[3vw] mr-[1vw] text-3xl text-bold text-red-600 font-bold'>Auto Avenue</span>
      </a>
    </div>
    <div className='flex justify-center items-center'>
    <div className='w-fit h-fit flex flex-col justify-center m-auto mr-24 mt-[10vh]'>
      <label className='text-xl' htmlFor="">Image URL</label>
      <input className='w-96 h-7 border rounded' type="text" onChange={(e) => {setImgURL(e.target.value)}} />
      <br />
      <label className='text-xl'  htmlFor="">Title</label>
      <input className='w-96 h-7 border rounded' type="text" onChange={(e) => {setTitle(e.target.value)}} />
      <br />
      <label className='text-xl'  htmlFor="">Price</label>
      <input className='w-96 h-7 border rounded' type="text" onChange={(e) => {setPrice(e.target.value)}} />
      <br />
      <label className='text-xl'  htmlFor="">Brand</label>
      <input className='w-96 h-7 border rounded' type="text" onChange={(e) => {setBrand(e.target.value)}} />
      <br />
      <label className='text-xl'  htmlFor="">Model</label>
      <input className='w-96 h-7 border rounded' type="text" onChange={(e) => {setModel(e.target.value)}} />
      <br />
      <label className='text-xl'  htmlFor="">Year</label>
      <input className='w-96 h-7 border rounded' type="text" onChange={(e) => {setYear(e.target.value)}} />
      <br />
      <label className='text-xl'  htmlFor="">Mileage</label>
      <input className='w-96 h-7 border rounded' type="text" onChange={(e) => {setMileage(e.target.value)}} />
      <br />
      <label className='text-xl'  htmlFor="">Location</label>
      <input className='w-96 h-7 border rounded' type="text" onChange={(e) => {setLocation(e.target.value)}} />
      <br />
      <label className='text-xl'  htmlFor="">Phone number</label>
      <input className='w-96 h-7 border rounded' type="text" onChange={(e) => {setNumber(e.target.value)}} />
      <br />
      <label className='text-xl'  htmlFor="">Email</label>
      <input className='w-96 h-7 border rounded' type="" onChange={(e) => {setEmail(e.target.value)}} />
      <br />
    </div>

    <div className='h-fit w-fit m-auto ml-24 mt-[10vh] flex flex-col justify-center'>
      <label className='text-xl'  htmlFor="">Description</label>
      <textarea className='w-96 h-96 border rounded' onChange={(e) => {setDescription(e.target.value)}} />
      <br />
      <button className='bg-blue-500 hover:bg-blue-700 text-white p-2 rounded' type='submit' onClick={handleSubmit}>Add listing</button>
    </div>
    </div>
    </>
  )
}
