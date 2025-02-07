Min Portfolio 
---
Det här är Alex och den här är min portfolio, skapat under min Front-End utbildning inom Javascript 2 kursen som examinationsuppgift. Jag har tänkt att fortsätta bygga på denna sidan även efter examinationen och förbättra den med nya kunskaper jag får med under utbildningen.

Portfolion är skapad med hjälp av React, React Router, React Redux samt Redux Persist med Vite.js

Paket som har installerat: vite@latest + react, react-router-dom, @reduxjs/toolkit react-redux, redux-persist

Funktioner, Hooks och Komponenter som har använts
---
React:
---
React Hooks - useEffect, useState, useRef

React-Router-Dom:
---
React-Router-Dom Hooks - useNavigate, useLocation

React-Router-Dom Komponenter - HashRouter, Link, Routes, Route

React-Redux:
---
React-Redux Funktioner - createSlice(), configureStore(), 

React-Redux Hooks - useSelector, useDispatch

React-Redux Komponenter - Provider

Redux-Persist:
---
Redux-Persist Funktioner - persistStore(), persistReducer()

Redux-Persist Komponenter - PersistGate

Beskrivning av funktionerna, hooks och komponenterna:
---
useState, useEffect, useRef
---
Jag har använt useState för att hantera state variabler och data, som hos Color för memory spelet och Navbar för mobil meny delen. 

useEffect har använts för att köra och hantera biverkningar vid sidan. Som reset button hos Color och Timer.

useRef använder jag hos Timer och den använts där för att lagra timer id samt stoppa onödiga omrenderingar.

useLocation, useNavigation, Routing
---
useLocation använder jag för att hålla active class beroende på vilken page man är i.

useNavigation och Link hjälper till att göra navigationen mellan Routes smidigare.

Jag har skapat routing inom App.jsx med hjälp av Routes och Route.

HashRouter
---
HashRouter används istället för BrowserRouter, jag är fortfarande inte riktigt säker men det är för att gh-pages krånglar med BrowserRouter eller något sånt.

Redux store
---
createSlice() samt configureStore() har använts i store samt all slice filer, createSlice för att skapa slices för våran Redux store och configureStore för att skapa en Redux store. persistStore() används i store för att aktivera persistence inom våran Redux store.

useSelector och useDispatch
---
useSelector och useDispatch har använts vid samband med våran store. useSelector för att extrahera data från store och useDispatch för att skicka action till våran store för att uppdatera states. Som i Navbar använder useSelector för att hämta theme från våran Redux store och useDispatch används för att skicka actions till Redux store för att växla mellan dark theme och light theme.

Redux-Persist
---
Provider används i main.jsx för att binda mellan app, så att ge app tillgång till våran Redux store. Medans PersistGate används i main.jsx för att dröja ner renderingar tills persisted state har laddat klart.

persistReducer() används för att lagra data och hålla fast det inom en localStorage. Det gör att datan inte försvinner mellan refresh. Jag använder det hos Greeting för att spara användarens namn.


