
import authReducer from './authSlices.js'
import productReducer from './productSlice.js'
import {combineReducers} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    auth: authReducer,
    products: productReducer,
})

export default rootReducer;