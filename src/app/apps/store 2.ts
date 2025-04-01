import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import userSlice from "../features/UserSlice";

const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem() {
      return Promise.resolve();
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

// Use sessionStorage only on the client, fallback to a noop storage on the server
const storageSession =
  typeof window !== "undefined"
    ? createWebStorage("session")
    : createNoopStorage();

const persistConfig = {
  key: "tykkt_key",
  storage: storageSession,
  whitelist: ["users"], // ✅ Make sure this matches the reducer key
  version: 1, // Helps with future migrations
};

const rootReducer = combineReducers({
  users: userSlice, // ✅ Make sure this key matches the whitelist
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      immutableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

// Type Definitions
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
