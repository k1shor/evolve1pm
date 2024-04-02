import { combineReducers, createStore } from "redux";
import counterReducer from "./counterReducer";
import gameReducer from "./gameReducer";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const rootReducer = combineReducers({
    countStore : counterReducer,
    gameStore : gameReducer
})

const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)  


// export const mystore = createStore(counterReducer)
// export const mystore = createStore(gameReducer)

// export const mystore = createStore(rootReducer)
export const mystore = createStore(persistedReducer)
export const mypersistor = persistStore(mystore)