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
        },
        //for reset value
        reset:(state)=>{
            state.count = 0
        },
        // increment by amount
        incrementByAmount:(state,action)=>{
            console.warn('action.payload ',action.payload)
            state.count += action.payload
        }
    }
})
// use action here
export const {increment,decrement,reset,incrementByAmount} = counterSlice.actions;
// use reducer here
export default counterSlice.reducer;