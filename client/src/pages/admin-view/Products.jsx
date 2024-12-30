import ImageUpload from '@/components/admin-view/imageUpload';
import CommonForm from '@/components/common/Form';
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { addProductFormElements } from '@/config';
import { useToast } from '@/hooks/use-toast';
import { addNewProduct, fetchAllProducts } from '@/store/admin/products-store';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

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
  const dispatch = useDispatch();
  const {productList} = useSelector(state=>state.adminProducts)
  const {toast} = useToast()

  const onSubmit = (e)=>{
    e.preventDefault();
    dispatch(addNewProduct({
      ...formData,
      image:uploadedURL
    })).then(data=>{
      console.log(data,"this the on submit data");
      if(data?.payload?.success){
        dispatch(fetchAllProducts())
        setOpenProDia(false)
        setImageFile(null)
        setFormData(initFormData)
        
        toast({
          title:'product got added successfully '
        })
      }
    }
    )
  }

  useEffect(()=>{
    dispatch(fetchAllProducts())
  },[dispatch])
  console.log(productList,uploadedURL,"form data");
  

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
          <ImageUpload file={imageFile} setFile={setImageFile} uploadedURL={uploadedURL} setUploadedURL={setUploadedURL} setImageLoading={setImageLoading} imageLoading={imageLoading} />
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
