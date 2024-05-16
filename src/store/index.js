import {configureStore} from '@reduxjs/toolkit'
import itemSlice from './ItemSlice.js'

const myntrastore = configureStore({
  reducer:{
    items: itemSlice.reducer
  }
})

export default myntrastore