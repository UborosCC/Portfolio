import { createSlice } from '@reduxjs/toolkit'; //importerar createSlice

const initialState = {
  projects: [ //En lagring av en lista med projekt detaljer
    { id: 1, title: 'Cosmic Café', description: 'An old HTML project', destination: '/cosmiccafe' },
    { id: 2, title: 'Greetings', description: 'A mix of React Projects', destination: '/nameinput'}
  ],
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {},
}); //Skapar en portfolio slice

export const selectProjects = (state) => state.project.projects; //Funktion som används för att hämta projects från våran state
export default projectSlice.reducer; //exporterar våran reducer slice
