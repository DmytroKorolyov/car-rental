import { createSlice } from '@reduxjs/toolkit';
import { fetchData } from './operations';

const makes = [
  "Buick",
  "Volvo",
  "HUMMER",
  "Subaru",
  "Mitsubishi",
  "Nissan",
  "Lincoln",
  "GMC",
  "Hyundai",
  "MINI",
  "Bentley",
  "Mercedes-Benz",
  "Aston Martin",
  "Pontiac",
  "Lamborghini",
  "Audi",
  "BMW",
  "Chevrolet",
  "Mercedes-Benz",
  "Chrysler",
  "Kia",
  "Land"
];


export const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    favorites: [],
    makes: makes,
    itemsToShow: 12,
    selectedCar: null,
    selectedMake: '',
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(car => car.id !== action.payload.id);
    },
    setItemsToShow: (state, action) => {
      state.itemsToShow = action.payload;
    },
    setSelectedCar: (state, action) => {
      state.selectedCar = action.payload;
    },
    setSelectedMake: (state, action) => {
      state.selectedMake = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.cars = action.payload;
    });
  }
});

export const { actions, reducer } = carsSlice;

