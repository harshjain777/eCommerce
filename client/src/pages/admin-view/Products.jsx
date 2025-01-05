import ImageUpload from '@/components/admin-view/imageUpload';
import ProductTile from '@/components/admin-view/ProductTile';
import CommonForm from '@/components/common/Form';
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { addProductFormElements } from '@/config';
import { useToast } from '@/hooks/use-toast';
import { addNewProduct, deleteProduct, editProduct, fetchAllProducts } from '@/store/admin/products-store';
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
  const [currentEditedId,setCurrentEditedId] = useState(null);
  const dispatch = useDispatch();
  const {productList} = useSelector(state=>state.adminProducts)
  const {toast} = useToast()

  function isFormValid(){
    return Object.keys(formData).map(key=>formData[key]!=='').every((item)=>item)
  }
  const handleDelte = (getCurrProductId) => {
    console.log(getCurrProductId);
    dispatch(deleteProduct(getCurrProductId)).then((data)=>{
      if(data?.payload?.success){
        dispatch(fetchAllProducts())
      }
    })
  }

  const onSubmit = (e)=>{
    e.preventDefault();

    currentEditedId!==null?
    dispatch(editProduct({
      id:currentEditedId,formData
    })).then((data)=>{
      if(data?.payload?.success){
        dispatch(fetchAllProducts())
        setOpenProDia(false)
        setCurrentEditedId(null);
        setFormData(initFormData)
    }})
    :
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
        <Button onClick={()=>setOpenProDia(!openProDia)} className=' hover:bg-zinc-200 capitalize'>Add new product</Button>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
          productList && productList.length >0 ? 
          productList.map(productItem=><ProductTile handleDelte={handleDelte}  setCurrentEditedId={setCurrentEditedId} setOpenProDia={setOpenProDia} setFormData={setFormData} product={productItem} />)
          : null
        }
      </div>
      <Sheet className='' open={openProDia} onOpenChange={()=>{
        setOpenProDia(false)
        setCurrentEditedId(null)
        setFormData(initFormData)
        }}>
        <SheetContent side='right' className=' overflow-auto'>
          <SheetHeader>
            <SheetTitle className='capitalize text-xl '>{currentEditedId!==null?'edit product':'add new product'}</SheetTitle>
          </SheetHeader>
          <ImageUpload file={imageFile} setFile={setImageFile} isEditMode={currentEditedId} uploadedURL={uploadedURL} setUploadedURL={setUploadedURL} setImageLoading={setImageLoading} imageLoading={imageLoading} />
          <div className="py-6 ">
            <CommonForm
            formControl={addProductFormElements}
            formData={formData}
            setFormData={setFormData}
            buttonText={currentEditedId!==null?'edit':'add'}
            onSubmit={onSubmit}
            isBtnDis = {!isFormValid()}
            >

            </CommonForm>
          </div>
        </SheetContent>

      </Sheet>
      
    </>
  )
}

export default AdminProducts
