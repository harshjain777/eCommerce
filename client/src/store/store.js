import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth-slice'
import AdminProductsSlice from './admin/products-store'
import shoppingProductSlice from './shop/products-slice'

const store = configureStore({
    reducer:{
        auth : authReducer,
        adminProducts : AdminProductsSlice,
        shoppingProducts : shoppingProductSlice
    }
})

export default store