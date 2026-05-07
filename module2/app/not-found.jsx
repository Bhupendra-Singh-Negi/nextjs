import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
  return (
    <div className='flex h-screen flex-col justify-center items-center bg-zinc-800'>
        <img src={"/page-not-found.svg" }alt="not found" className='w-1/2 h-1/2 object-contain'/>
        <h1 className='my-4 text-4xl font-bold text-zinc-200'>404 Not found page</h1>
        <Link href={"/"} className='text-zinc-200 bg-blue-600 px-4 py-2 font-bold rounded-2xl'>Go back to home</Link>
    </div>
  )
}

export default NotFoundPage