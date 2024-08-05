import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import tasksSlice from "./features/taskSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store =configureStore({
    reducer:{
        tasks:tasksSlice
    }
})
export const useAppDispatch : ()=> typeof store.dispatch =useDispatch;
export const useAppselctor : TypedUseSelectorHook<ReturnType<typeof store.getState>> =useSelector;
