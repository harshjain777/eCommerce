
import React, { useEffect, useRef } from 'react'
import { Input } from '../ui/input';
import { Label } from '@radix-ui/react-label';
import { FileIcon, UploadCloudIcon, XIcon } from 'lucide-react';
import { Button } from '../ui/button';
import axios from 'axios';

function ImageUpload({file,setFile,uploadedURL,setUploadedURL}) {

    const inputRef = useRef(null)

    const handleOnImageUp = (e)=>{
        const selectedFile = e.target.files?.[0]
        if(selectedFile){
            setFile(selectedFile)
        }
        
    }
    const handledragOver = (e)=>{
      e.preventDefault();
    }
    const handleDrop = (e)=>{
      e.preventDefault();
      const dropedFile = e.dataTransfer.files?.[0];
      
      if(dropedFile){
        setFile(dropedFile)
      }
    }

    const handleremoveImg = (e) => {
      setFile(null)
      if(inputRef.current){
        inputRef.current.value = '';
      }
    }

    const uploadFileImgtoCloudinary = async()=>{
      const data = new FormData()
      data.append('my_file',file)
      const res = await axios.post('http://localhost:8000/api/admin/products//upload-img',data)
      console.log(res.data,"img got uploadedd loolol");
      
      if(res) setUploadedURL(res.data)
    }

    useEffect(()=>{
      if(file!=null) uploadFileImgtoCloudinary
    },[file])

  return (
    <div className='w-full  max-w-md mx-auto'>
    <label className='text-lg font-light mb-2 text-center mt-4 text-light block'>Upload Image</label>
     <div onDragOver={handledragOver}  onDrop={handleDrop} className=" border-[1px] border-dashed p-4 rounded-lg">
      <Input id='image-upload'  type="file" className='hidden' ref={inputRef} onChange={handleOnImageUp} />
      {
        !file? 
        <Label htmlFor='image-upload' className='flex flex-col  items-center justify-center  h-32  cursor-pointer'>
            <UploadCloudIcon className='w-10 h-10  text-muted-foreground  mb-2' />
            <span className='text-zinc-500'>Drag & drop or click to upload image</span>
        </Label> 
        : (
          <div className='flex items-center justify-between px-8 '>
            <div className="flex items-center">
              <FileIcon className='w-7 h-7 text-primary  mr-2'/>
            </div>
            <p className='text-sm  font-light'>
              {file.name}
            </p>
            <Button  variant='ghost' size='icon' className='text-muted-foreground hover:text-foreground' onClick={handleremoveImg}>
              <XIcon className='w-4 h-4'/>
              <span className='sr-only'>Remove File</span>
            </Button>
          </div>
        )
      }
     </div>
    </div>
  )
}

export default ImageUpload
