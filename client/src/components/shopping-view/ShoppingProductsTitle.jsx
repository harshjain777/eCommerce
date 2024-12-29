import React from 'react'
import { Card, CardContent, CardFooter } from '../ui/card'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'

function ShoppingProductsTitle({products}) {
  return (
    <Card className='w-full max-w-sm mx-auto' >
        <div className="">
        <div className=" relative">
            <img src={products?.image} alt={products?.title} className='w-full h-[300px]  object-cover rounded-t-lg' />
            {
                products?.salePrice > 0 ? <Badge className=' absolute top-2 left-2 bg-red-600  hover:bg-red-800'>sale</Badge> : null
            }
        </div>
        <CardContent className='p-4'>
            <h2 className='text-xl font-light mb-2'>
            {
                products?.title
            }
            </h2>
            <div className="flex justify-center items-center mb-2">
                <span className='text-sm text-muted-foreground'>{products?.category}</span>
                <span className='text-sm text-muted-foreground'>{products?.brand}</span>
            </div>
            <div className="flex justify-center items-center mb-2">
                <span className={`${products?.salePrice>0?'line-through':''} text-lg font-medium text-primary `}>{products?.price}</span>
                {
                   products?.salePrice>0? <span className='text-sm text-muted-foreground'>{products?.brand}</span> : null
                }
            </div>
        </CardContent>
        <CardFooter>
            <Button className='' >Add to Cart</Button>
        </CardFooter>
        </div>
    </Card>
  )
}

export default ShoppingProductsTitle
