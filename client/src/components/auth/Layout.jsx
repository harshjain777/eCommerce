import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='min-h-screen flex w-full'>
        <div className="hidden lg:flex bg-black justify-center items-center w-1/2 px-10">
        <div className="max-w-md space-y-6 text-center ">
            <h1 className='text-4xl tracking-tighter text-white  font-sans font-light'>WELCOME ToeCommerce</h1>
        </div>
        </div>
      <div className="flex flex-1 items-center justify-center bg-zinc-800 px-4 py-10 sm:px-6 lg:px-8">
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout
