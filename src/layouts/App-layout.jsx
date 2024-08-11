import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

function Applayout() 
{
  return (
    <div className='bg-green-950 w-full min-h-screen text-white '>
      <div  className=' px-6 py-4 mx-5'>
         <Header/>

      <main>
        <Outlet/>
      </main>
    </div>
    </div>
  )
}

export default Applayout