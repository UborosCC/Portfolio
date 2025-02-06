import { createSlice } from '@reduxjs/toolkit';//importerar createSlice

//Initial state: användar namnet startar som en blank string 
const initialState = {
    name: '', 
};


//Skapar en Redux slice som hanterar användarens state
const userSlice = createSlice ({
    name: 'user', //Slice namn
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload; //updaterar namnet inom state
        },
    },
});

export const { setName } = userSlice.actions; //exporterar setName
export default userSlice.reducer; //exporterar våran reducer slice