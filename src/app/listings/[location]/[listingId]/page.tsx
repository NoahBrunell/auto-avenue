'use client'
import { getListingById } from '@/utils/handleDatabase';
import React, { useEffect, useState } from 'react'

export default function Page({ params }: {
    params: { listingId: string }
}) {
  interface Listing {
    id: number;
    title: string;
    brand: string;
    model: string;
    mileage: number;
    description: string;
    number: string;
    email: string;
    price: number;
    location: string;
    year: number;
    imgurl: string;
  }

  const [listing, setListing] = useState<Listing[]>([])

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const result = await getListingById(params.listingId)
        setListing(result)
      } catch (error) {
        console.error('Something went wrong: ' + error)
      }
    }
    fetchListings()
  },[params.listingId])



  return (
    <>
      <div className='w-screen h-[5vh] flex items-center border-b-black border-b mb-[2vh]'>
        <a href="../../">
          <span className='ml-[3vw] mr-[1vw] text-3xl text-bold text-red-600 font-bold'>Auto Avenue</span>
        </a>
        {listing.map((listing) => (
          <span key={''} className='text-xl uppercase text-gray-600'><span className='text-2xl'>/</span>{listing.location}</span>
        ))}
      </div>
      <div className='w-screen h-[93vh] flex flex-col'>
        {listing.map((listing) => (
        <div key={''}>
          <div className='w-[80vw] h-[calc(93vh/2)] mx-auto flex justify-center'>
            <img src={listing.imgurl} alt="No image provided" className='h-full'/>
          </div>
          <div className='w-screen h-[calc(93vh/2)] flex justify-center items-center'>
            <div className='w-[80%] h-4/5 flex flex-col'>
              <div className='w-full h-1/6 flex justify-between items-start'>
                <p className='text-4xl font-bold'>{listing.title}</p>
                <p className='text-3xl font-medium text-gray-600'>Brand: {listing.brand}</p>
                <p className='text-3xl font-medium text-gray-600'>Model: {listing.model}</p>
                <p className='text-3xl font-medium text-gray-600'>Year: {listing.year}</p>
                <p className='text-3xl font-medium text-gray-600'>Mileage: {listing.mileage}km</p>
                <p className='text-4xl text-green-500 font-bold'>{listing.price}€</p>
              </div>
              <div className='w-full h-5/6'>
              <div className='w-full h-fit flex mb-10'>
                  <p className='mr-8 p-2 rounded bg-blue-400 text-white'>{listing.number}</p>
                  <p className='mr-8 p-2 rounded bg-green-600 text-white'>{listing.email}</p>
                  <p className='mr-8 p-2 rounded bg-gray-500 text-white'>{listing.location}</p>
                </div>
                <p className='text-xl'>{listing.description}</p>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
    </>
  )
}
