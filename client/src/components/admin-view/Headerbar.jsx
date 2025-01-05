import React from 'react'
import { Button } from '../ui/button'
import { LogOut, Menu } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { logoutUser } from '@/store/auth-slice';

function Headerbar({setOpen}) {

  const dispatch = useDispatch();

  const handleLogout = ()=>{
    dispatch(logoutUser())
  }

  return (
    <header className='flex items-center justify-between px-4 py-3  border-b border[1px] border-zinc-300'>

      <Button  onClick={()=>setOpen(true)} className='lg:hidden  hover:bg-zinc-200  sm:block'>
        <Menu/>
        <span className='sr-only'>toggle menu</span>
      </Button>
      <div className="flex flex-1 justify-end ">
        <Button onClick={handleLogout} className=' inline-flex  hover:bg-zinc-200 hover:text-black items-center  gap-2 text-sm font-light px-4 py-2 tracking-tight rounded-md'><div className="hidden lg:block">Logout</div><LogOut /> </Button>
      </div>

    </header>
  )
}

export default Headerbar
