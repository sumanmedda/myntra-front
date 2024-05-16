import {configureStore} from '@reduxjs/toolkit'
import itemSlice from './ItemSlice.js'
import fetchStatusSlice from './fetchStatus.js'
import bagSlice from './bagSlice.js'

const myntrastore = configureStore({
  reducer:{
    items: itemSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bag: bagSlice.reducer,
  }
})

export default myntrastore