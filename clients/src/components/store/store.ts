import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./features/taskSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// Explicit type for the Redux store
export const store = configureStore({
  reducer: {
    tasks: tasksSlice,
  },
});

// Define the types for the store and dispatch function
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// Create typed hooks
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
