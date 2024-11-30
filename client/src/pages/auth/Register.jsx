import CommonForm from '@/components/common/Form';
import { registerFormControl } from '@/config';
import { useToast } from '@/hooks/use-toast';
import { registerUser } from '@/store/auth-slice';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'

const initialState = {
  UserName : '',
  Password : '',
  Email:''
}

function Register() {
  const [formData,setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {toast} = useToast();

  const onSubmit = (e) => {

    e.preventDefault();
    dispatch(registerUser(formData)).then((data)=>{
      if(data?.payload?.success){
        toast({
          title:data?.payload?.message,
          description:"now pls login"
        })
         navigate('/auth/login')
      }else{
        toast({
          title:data?.payload?.message,
          variant:'destructive'
        })
      }
      console.log(data);
      
    })

  }

  return (
    <div className='mx-auto w-full  text-zinc-500 space-y-6 max-w-md'>
      <div className="text-center">
      <h1 className='text-4xl tracking-tighter font-light text-white uppercase text-foreground'>create new account</h1>
      <div className="flex items-center justify-center gap-5">
      <p className='mt-2 text-blue-800'>already have a account?</p>
      <Link to='/auth/login' className='text-zinc-200 mt-2 underline hover:text-zinc-300'>login</Link>
      </div>
      </div>
      <CommonForm 
        formControl={registerFormControl}
        buttonText={'Create Account'}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}

      />
    </div>
  )
}

export default Register
