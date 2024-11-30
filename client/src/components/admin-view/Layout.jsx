import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import Headerbar from './Headerbar'

function AdminLayout() {
  const [open,setOpen] = useState(false)
  return (
    <div className='min-h-screen w-full flex '>
        {/*SideBar */}
        <SideBar open={open} setOpen={setOpen}/>
        <div className="flex flex-1 flex-col">
          {/*Headerbar */}
            <Headerbar setOpen={setOpen}/>
            <main className='flex flex-1 bg-black p-4 md:p-6 '>
                <Outlet/>
            </main>
        </div>
      
    </div>
  )
}

export default AdminLayout
