import { configureStore } from '@reduxjs/toolkit'
import siteReducer from './site'
import authReducer from './auth'

export default configureStore({
  reducer: {
    site: siteReducer,
    auth: authReducer
  }
})