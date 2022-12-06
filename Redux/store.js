// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import {createWrapper} from "next-redux-wrapper";

// import familtTree from './folderSlice';

// const combinedReducers = combineReducers({
//     familtTree,
// })

// export const makeStore = () => configureStore({
//     reducer: combinedReducers,
// })

// export const wrapper = createWrapper(makeStore);


import { configureStore } from '@reduxjs/toolkit';
import familyTreeReducer from './folderSlice';

export const store = configureStore({
  reducer: {
    familyTree: familyTreeReducer
  },
})