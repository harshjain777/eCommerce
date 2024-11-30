import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/auth/Layout'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import AdminLayout from './components/admin-view/Layout'
import AdminDashboard from './pages/admin-view/Dashboard'
import AdminProducts from './pages/admin-view/Products'
import AdminOrders from './pages/admin-view/Orders'
import AdminFeatures from './pages/admin-view/Features'
import ShoppingLayout from './components/shopping-view/Layout'
import NotFound from './pages/notFound'
import ShoppingHome from './pages/shopping-view/home'
import Shoppinglisting from './pages/shopping-view/listing'
import Shoppingcheckout from './pages/shopping-view/checkout'
import ShoppingAccount from './pages/shopping-view/Account'
import CheckAuth from './components/common/CheckAuth'
import UnAuthPage from './pages/unauth-page'
import { useDispatch, useSelector } from 'react-redux'
import { checkAuth } from './store/auth-slice'
import { Skeleton } from "@/components/ui/skeleton"


function App() {
  const {isAuthenticated,user,isLoading} = useSelector((state)=>state.auth)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(checkAuth())
  },[dispatch])

  if(isLoading){
    return(
      <Skeleton className="w-full h-screen bg-black" />

    )
  }

  return (
    <div className='flex flex-col  overflow-hidden bg-white'>
      <Routes>
        <Route path='/auth' element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <Layout/>
          </CheckAuth>
        } >
            <Route path='login' element={<Login/>} />
            <Route path='register' element={<Register/>}/>
        </Route>
        <Route path='/admin' element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminLayout/>
          </CheckAuth>
        }>
            <Route path='dashboard' element={<AdminDashboard/>}/>
            <Route path='products' element={<AdminProducts/>}/>
            <Route path='orders' element={<AdminOrders/>}/>
            <Route path='features' element={<AdminFeatures/>}/>
        </Route>
        <Route path='/shop' element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <ShoppingLayout/>
          </CheckAuth>
        }>
            <Route path='home' element={<ShoppingHome/>}/>
            <Route path='listing' element={<Shoppinglisting/>}/>
            <Route path='checkout' element={<Shoppingcheckout/>}/>
            <Route path='account' element={<ShoppingAccount/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/unauth-page' element={<UnAuthPage/>}/>
      </Routes>
    </div>
  )
}

export default App
