import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    count:0
}

export const counterSlice = createSlice(
    {
        name:'counter',
        initialState,
    reducers:{
        // use anon fun for increment counter
        increment: (state) =>{
            state.count += 1
        },
        // use anon fun for decrement counter
        decrement: (state) =>{
            state.count -= 1
        }
    }
})

export const {increment,decrement} = counterSlice.actions;

export default counterSlice.reducer;