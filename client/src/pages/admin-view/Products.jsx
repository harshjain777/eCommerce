import ImageUpload from '@/components/admin-view/imageUpload';
import CommonForm from '@/components/common/Form';
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { addProductFormElements } from '@/config';
import React, { useState } from 'react'

function AdminProducts() {
  const initFormData = {
    image:null,
    title:'',
    description:'',
    price:'',
    salePrice:'',
    brand:'',
    totalStock:'',
    category:''
  }
  const [openProDia,setOpenProDia] = useState(false);
  const [formData,setFormData] = useState(initFormData)
  const [imageFile,setImageFile] = useState(null);
  const [uploadedURL,setUploadedURL] = useState('')
  const [imageLoading,setImageLoading] = useState(false)
  const onSubmit = ()=>{

  }
  return (
    <>

      <div className="mb-5 flex justify-end w-full">
        <Button onClick={()=>setOpenProDia(!openProDia)} className='bg-white text-black hover:bg-zinc-200 capitalize'>Add new product</Button>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4"></div>
      <Sheet className='bg-black' open={openProDia} onOpenChange={()=>setOpenProDia(false)}>
        <SheetContent side='right' className='bg-black text-white overflow-auto'>
          <SheetHeader>
            <SheetTitle className='capitalize text-xl text-white'>add new products</SheetTitle>
          </SheetHeader>
          <ImageUpload file={imageFile} setFile={setImageFile} uploadedURL={uploadedURL} setUploadedURL={setUploadedURL} setImageLoading={setImageLoading} />
          <div className="py-6 text-black">
            <CommonForm
            formControl={addProductFormElements}
            formData={formData}
            setFormData={setFormData}
            buttonText='add'
            onSubmit={onSubmit}

            >

            </CommonForm>
          </div>
        </SheetContent>

      </Sheet>
      
    </>
  )
}

export default AdminProducts
