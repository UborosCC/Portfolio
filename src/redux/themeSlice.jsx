import { createSlice } from '@reduxjs/toolkit'; //importerar createSlice

//Väljer vilken theme som ska visas på början, localStorage.getItem('theme') säkerställer att theme håller kvar även om sidan refreshas 
const initialState = {
    theme: localStorage.getItem('theme') || 'light', //Hämtar theme från localStorage eller kör default som är 'light' theme
};

//toggleTheme funktionen gör att theme can byta mellan 'light' och 'dark' themes
const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', state.theme); //sparar den nya theme till localStorage
        },
    },
});

//exporterar toggleTheme och themeSlice.reducer
export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;