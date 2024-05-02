import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
    cars: [],
    car: null,
};

// Define the slice
const carSlice = createSlice({
    name: "student",
    initialState,
    reducers: {
        setCars: (state, action) => {
            state.cars = action.payload;
        },
        setCar: (state, action) => {
            state.car = action.payload;
        },
    },
});

// export the setter funtion
export const { setCars, setCar } = carSlice.actions;

// export the reducer
export default carSlice.reducer;
