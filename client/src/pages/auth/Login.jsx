import CommonForm from '@/components/common/Form';
import { loginFormControl } from '@/config';
import { useToast } from '@/hooks/use-toast';
import { loginUser } from '@/store/auth-slice';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'

const initialState = {
  password : '',
  email:''
}

function Login() {
  const [formData,setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  const onSubmit = (e) => {

    e.preventDefault();
    dispatch(loginUser(formData)).then((data)=>{
      
      if(data?.payload?.success){
        toast({
          title:data?.payload?.message
        })

      }else{
        toast({
          title:data?.payload?.message,
          variant:'destructive'
        })
      }
      
    })

  }

  return (
    <div className='mx-auto w-full  text-zinc-500 space-y-6 max-w-md'>
      <div className="text-center">
      <h1 className='text-4xl tracking-tighter font-light uppercase text-white text-foreground'>sign in</h1>
      <div className="flex items-center justify-center gap-5">
      <p className='mt-2 text-blue-800'>Don't have an account?</p>
      <Link to='/auth/register' className='text-zinc-200 mt-2 underline hover:text-zinc-300'>Register</Link>
      </div>
      </div>
      <CommonForm 
        formControl={loginFormControl}
        buttonText={'sign in'}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}

      />
    </div>
  )
}

export default Login
