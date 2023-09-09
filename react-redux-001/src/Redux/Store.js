import {configureStore} from '@reduxjs/toolkit';
import darkModeReducer from './darkModeSlice';
export const Store= configureStore({
    reducer:{
        darkMode: darkModeReducer
    }
})