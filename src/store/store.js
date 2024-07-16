import { configureStore } from '@reduxjs/toolkit'
import movieoReducer from './movieoSlice'

export default configureStore({
  reducer: {
    movieoData : movieoReducer
  },
})