import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name:'user',
    initialState:[{}],
    reducers:{
        getUser:(state)=>{
            state.push({name:"Nick Rivera"})
            state.push({name:"CJ Lewis"})
        }
    }
})

export default slice.reducer;

export const {getUser} = state.actions;