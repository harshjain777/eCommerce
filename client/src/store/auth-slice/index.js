import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    isAuthenticated:false,
    isLoading:true,
    user:null
}

export const registerUser = createAsyncThunk('auth/register',async(formData)=>{
    const response = await axios.post('http://localhost:8000/api/auth/register',formData,{ withCredentials:true});
    return response.data
})

export const loginUser = createAsyncThunk('auth/login',async(formData)=>{
    const response = await axios.post('http://localhost:8000/api/auth/login',formData,{ withCredentials:true});
    return response.data
})

export const logoutUser = createAsyncThunk(
    "/auth/logout",
  
    async () => {
      const response = await axios.post(
        "http://localhost:8000/api/auth/logout",
        {},
        {
          withCredentials: true,
        }
      );
  
      return response.data;
    }
  );

export const checkAuth = createAsyncThunk('auth/checkauth',async(formData)=>{
    const response = await axios.get('http://localhost:8000/api/auth/checkauth',{ withCredentials:true , headers:{
        'cache-control':'no-store, no-cache must-revalidate , proxy-revalidate',
        Expires:'0'

    }});
    return response.data
})

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setUser:(state,action)=>{

        }

    },
    extraReducers:(builder)=>{
        builder.addCase(registerUser.pending,(state)=>{
            state.isLoading=true;
        }).addCase(registerUser.fulfilled,(state,action)=>{
            state.isAuthenticated=false;
            state.isLoading=false;
            state.user=null;
        }).addCase(registerUser.rejected,(state)=>{
            state.isLoading=false;
            state.isAuthenticated=false;
            state.user=null;
        }).addCase(loginUser.pending,(state)=>{
            state.isLoading=true;
        }).addCase(loginUser.fulfilled,(state,action)=>{
            state.isAuthenticated=!action.payload.success ? false:true;
            state.isLoading=false;
            console.log(action.payload.user);
            state.user= !action.payload.success ? null : action.payload.user;
        }).addCase(loginUser.rejected,(state)=>{
            state.isLoading=false;
            state.isAuthenticated=false;
            state.user=null;
        }).addCase(checkAuth.pending,(state)=>{
            state.isLoading=true;
        }).addCase(checkAuth.fulfilled,(state,action)=>{
            state.isAuthenticated=!action.payload.success ? false:true;
            state.isLoading=false;
            state.user= !action.payload.success ? null : action.payload.user;
        }).addCase(checkAuth.rejected,(state)=>{
            state.isLoading=false;
            state.isAuthenticated=false;
            state.user=null;
        })
    }
})
export const {setUser} = authSlice.actions
export default authSlice.reducer