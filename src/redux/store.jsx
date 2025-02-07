import { configureStore } from '@reduxjs/toolkit'; //importerar configureStore, för att skapa Redux Store
import { persistStore, persistReducer } from 'redux-persist';//importerar persistStore och persistReducer, för att hantera state persistance
import themeReducer from './ThemeSlice';//importerar themeReducer 
import userReducer from './UserSlice';//importerar userReducer
import projectReducer from './ProjectSlice';
import storage from 'redux-persist/lib/storage';//importerar storage, det här är localStorage och används för att hålla fast state

//Konfiguration på React Persist
const persistConfig = {
    key: 'user', //Skapar en unik nyckel som sedan sparas i localStorage
    storage, //localStorage 
};

//Bindar ihop persistConfig och userReducer runt persistReducer, userReducer sparar användarens namn, persistConfig berättar till React Persist att datan ska sparas hos localStorage och persistReducer ser till att datan ska sparas i localStorage
const persistedUserReducer = persistReducer(persistConfig, userReducer); 

//Store Konfiguration 
export const store = configureStore({
    reducer: {
        user: persistedUserReducer, //Använder persistedReducer för att behålla data även efter en refresh
        theme: themeReducer, //Initierar Redux med themeReducer
        project: projectReducer, //Initierar Redux med portfolioReducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: { 
                ignoreActions: ['persist/PERSIST', 'persist/REHYDRATE'], //Konfiguration av middleware, gör att den berättar till Redux att ignorera dem här två actions för att förhindra varningar om non-serializable data
            },
        }),
});

export const persistor = persistStore(store);//Skapar en persistor för att hantera localStorage
export default store;//expoterar store