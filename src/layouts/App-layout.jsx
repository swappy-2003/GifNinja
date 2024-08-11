import React from 'react'
import { Outlet } from 'react-router-dom'

function Applayout() 
{
  return (
    <div className=''>
    { /*header*/}

      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default Applayout