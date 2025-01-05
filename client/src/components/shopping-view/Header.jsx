import { House, LogOut, Menu, ShoppingCart, User } from 'lucide-react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Sheet,SheetContent,SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'
import { useDispatch, useSelector } from 'react-redux'
import { shoppingViewHeader } from '@/config'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from '@radix-ui/react-avatar'
import { logoutUser } from '@/store/auth-slice'

function MenuItems(){
  return <nav className='flex flex-col mb-3 lg:mb-0 lg:flex-row lg:items-center gap-6'>
    {
      shoppingViewHeader.map(item=><Link className='text-sm font-thin' key={item.id} to={item.path} >{item.lable}</Link>)
    }
  </nav>
}



function HeaderRightContent(){

  const {user} = useSelector(state=>state.auth)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser())
  }

  return <div className="flex lg:items-center lg:flex-row flex-col gap-4">
    <Button onClick={()=>navigate('/shop/account')} className='bg-white w-4 hover:bg-white' >
    <ShoppingCart className='bg-white text-black hover:text-zinc-500 ' />
    <span className='sr-only'>user cart</span>
    </Button>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className=''>
          <AvatarFallback className= ' border rounded-md p-1 px-2 font-bold capitalize'>{user?.userName[0]}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent side='right' className='w-56'  >
        <DropdownMenuLabel>logged is as {user.userName}</DropdownMenuLabel>
        <DropdownMenuSeparator></DropdownMenuSeparator>
        <DropdownMenuItem  onClick={()=>navigate('/shop/account')}><User className='mr-2 h-4 w-4' />Account</DropdownMenuItem>
        <DropdownMenuSeparator></DropdownMenuSeparator>
        <DropdownMenuItem onClick={handleLogout}><LogOut className='mr-2 h-4 w-4' />Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
}

function ShoppingHeader() {
  const {isAuthenticated,user} = useSelector(state=>state.auth)
  
  return (
    <header className='sticky top-0 z-40 w-full border-b '>
      <div className="flex h-16  items-center  justify-between px-4  md:px-6">
        <Link to='/shop/home' className='flex items-center gap-2'>
        <House className='h-6 font-thin w-6' />
        <span className=' font-thin '>Ecommerce</span>
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button  variant='outline' size='icon' className='lg:hidden'>
            <Menu className='h-6 w-6' />
              <span className='sr-only'>toggle header menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side='left' className='w-full max-w-xs '>
            <MenuItems/>
            <HeaderRightContent/>
          </SheetContent>
        </Sheet>
        <div className="hidden lg:block">
          <MenuItems/>
        </div>
        {
          isAuthenticated? <div className='hidden lg:block' ><HeaderRightContent/></div>:null
        }
      </div>
    </header>
  )
}

export default ShoppingHeader
