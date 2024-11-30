import React from 'react'
import { Button } from '../ui/button'
import { LogOut, Menu } from 'lucide-react'

function Headerbar({setOpen}) {
  return (
    <header className='flex items-center justify-between px-4 py-3 bg-black border-b border[1px] border-zinc-300'>

      <Button  onClick={()=>setOpen(true)} className='lg:hidden bg-white text-black hover:bg-zinc-200  sm:block'>
        <Menu/>
        <span className='sr-only'>toggle menu</span>
      </Button>
      <div className="flex flex-1 justify-end ">
        <Button className=' inline-flex  hover:bg-zinc-200 hover:text-black items-center bg-white text-black gap-2 text-sm font-light px-4 py-2 tracking-tight rounded-md'><div className="hidden lg:block">Logout</div><LogOut /> </Button>
      </div>

    </header>
  )
}

export default Headerbar
