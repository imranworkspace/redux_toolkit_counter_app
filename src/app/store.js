import { configureStore } from "@reduxjs/toolkit";
// store here counter reducer
import {counterReducer} from '../feature/counter/counterSlice'

export const store = configureStore({
    reducer:{
        // use here reducer whatever you have created
        counter:counterReducer,
    }
})
