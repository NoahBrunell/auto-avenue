'use client'
import { getAllListings, getListings } from '@/utils/handleDatabase'
import { reverse } from 'dns'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function Page({ params }: {
    params: { location: string }
}) {
  interface Listing {
    id: number;
    title: string;
    brand: string;
    model: string;
    mileage: number;
    hours: number;
    description: string;
    number: string;
    email: string;
    price: number;
    location: string;
    year: number;
    imgurl: string;
  }

  const [listings, setListings] = useState<Listing[]>([])
  const router = useRouter()

  useEffect(() => {
    const fetchListings = async () => {
      if (params.location == 'all') {
        try {
          const result = await getAllListings()
          setListings(result)
        } catch (error) {
          console.error('Something went wrong: ' + error)
        }
      } else {
        try {
          const result = await getListings(params.location)
          setListings(result)
        } catch (error) {
          console.error('Something went wrong: ' + error)
        }
      }
    }
    fetchListings()
  },[params.location])

  return (
    <>
    <div className='w-screen h-[5vh] flex items-center border-b-black border-b'>
      <a href="../">
        <span className='ml-[3vw] mr-[1vw] text-3xl text-bold text-red-600 font-bold'>Auto Avenue</span>
      </a> 
      <span className='text-xl uppercase text-gray-600'><span className='text-2xl'>/</span>{params.location}</span>
    </div>
    
    <div className='w-screen h-fit flex flex-col items-center'>
      {listings.length > 0 ? (
        listings.map((listing, index) => (
          <div onClick={() => {router.push(`./${params.location}/${listing.id}`)}} key={index} className={'w-[80vw] h-52 border border-t-gray border-x-0 border-b-0 mt-2 py-4 flex hover:cursor-pointer active:bg-slate-100'}>
            <div className='w-44 h-44 flex justify-center items-center overflow-hidden'>
              <img className='w-44 overflow-hidden' src={listing.imgurl} alt='No image provided'/>
            </div>
            <div className='h-full flex flex-col justify-around my-auto'>
              <h2 className='ml-12 mt-4 text-4xl text-slate-600 font-medium'>{listing.title}</h2>
              <div className='w-fit h-28 ml-12 my-auto flex flex-col flex-wrap justify-center'>
                <p className='text-xl m-3 ml-0 mb-0'>Brand: {listing.brand}</p>
                <p className='text-xl m-3 ml-0 mb-0'>Model: {listing.model}</p>
                <p className='text-xl m-3 ml-0 mb-0'>Year: {listing.year}</p>
                <p className='text-xl m-3 ml-0 mb-0'>Mileage: {listing.mileage}km</p>
              </div>
            </div>
            <p className='m-auto mr-24 mt-4 text-4xl text-green-500 font-medium'>{listing.price}€</p>
          </div>
        ))
      ) : (
        <div className='my-10'>No listings available</div>
      )}
      <div className='h-[1px] w-[80vw] bg-gray-200 mt-2'></div>
    </div>
    </>
  )
}
