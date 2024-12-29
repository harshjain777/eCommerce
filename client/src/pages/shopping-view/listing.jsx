
import Fliter from '@/components/shopping-view/Fliter'
import ShoppingProductsTitle from '@/components/shopping-view/ShoppingProductsTitle'
import { Button } from '@/components/ui/button'
import { DropdownMenu,DropdownMenuContent,DropdownMenuRadioGroup,DropdownMenuRadioItem,DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { sortOptions } from '@/config'
import { fetchAllFilteredProducts } from '@/store/shop/products-slice'

import { ArrowUpDown } from 'lucide-react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Shoppinglisting() {

  const dispatch = useDispatch();
  const {productList} = useSelector(state=>state.shoppingProducts)

  useEffect(()=>{
    dispatch(fetchAllFilteredProducts());
  },[dispatch])
  console.log(productList);
  

  return (
    <div className='grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 p-4 md:p-6'>
      <Fliter/>
      <div className="bg-background w-full  rounded-lg shadow-sm">
        <div className="flex bg-background items-center border-b  p-4 justify-between">
          <h2 className='text-lg font-light  capitalize'>all products</h2>
          <div className="flex items-center gap-2">
            <span className='text-muted-foreground'>10 products</span>
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='outline' size='sm' className='flex items-center gap-1'>
                <ArrowUpDown className='h-4 w-4'/>
                <span className=' font-light capitalize'>sort by</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='w-[200px]' >
              <DropdownMenuRadioGroup>
                {
                  sortOptions.map(item=><DropdownMenuRadioItem key={item.id} >{item.label}</DropdownMenuRadioItem>)
                }
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

        </div>
      </div>
      <div className="">
        {
          productList && productList.length > 0 ?
          productList.map(item=> <ShoppingProductsTitle products={item} /> ) :
          null
        }
      </div>
    </div>
  )
}

export default Shoppinglisting
