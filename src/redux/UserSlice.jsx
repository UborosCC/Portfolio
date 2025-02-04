import { createSlice } from '@reduxjs/toolkit';//importerar createSlice

//Initial state: användar namnet starter som en blank string 
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

//exporterar all action för att updatera namnet
export const { setName } = userSlice.actions;
export default userSlice.reducer;