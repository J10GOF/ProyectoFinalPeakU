import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  status: 'idle',
  error: null,
};

export const traerPlaces = createAsyncThunk(
  'places/traerPlaces',
  async () => {
    try {
      const respuesta = await axios.get("http://localhost:8000/api/places/");
      return respuesta.data; // Devolver los datos obtenidos de la API
    } catch (error) {
      throw error; 
    }
  }
);

const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {}, // Puedes agregar acciones síncronas aquí si es necesario
  extraReducers: (builder) => {
    builder
      .addCase(traerPlaces.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(traerPlaces.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(traerPlaces.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default placesSlice.reducer;
