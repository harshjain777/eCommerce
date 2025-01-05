import React from 'react'
import { Card, CardContent, CardFooter } from '../ui/card'
import { Button } from '../ui/button'

function ProductTile({product , setCurrentEditedId,setOpenProDia,setFormData ,handleDelte}) {
  return (
    <Card className="w-full max-w-sm mx-auto">
        <div >
            <div className="relative">
                <img src={product?.image} alt={product?.title} className='w-full h-[300px] object-cover rounded-t-lg' />
            </div>
            <CardContent>
                <h1 className=' font-light capitalize text-xl mt-2 mb-2' >{product.title}</h1>
                <div className=" flex items-center justify-between mb-2">
                    <span className={`${product?.salePrice>0?' text-foreground line-through ':''}text-lg text-primary font-light `} >{product?.price}</span>
                    <span className={`${product?.salePrice>0?'':'hidden'} font-light text-primary text-lg`} >{product?.salePrice}</span>
                </div>
            </CardContent>
            <CardFooter className='flex justify-between items-center'>
                <Button  onClick={()=>{
                    setOpenProDia(true)
                    setCurrentEditedId(product._id)
                    setFormData(product)
                }} >edit</Button>
                <Button onClick={()=>handleDelte(product?._id)} >delete</Button>
            </CardFooter>
        </div>
    </Card>
  )
}

export default ProductTile
