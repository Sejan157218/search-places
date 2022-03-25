import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

  const initialState = {
      place:{},
    placeData: [],
    status: 'idle',
  };


export const fetchPlaces = createAsyncThunk('api/fetchPlaces', async (url) => {
  const response = await fetch(url)
  .then((res) => res.json());
  return response;
});

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    addToPlace: (state, { payload }) => {
      
      state.place = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlaces.fulfilled, (state, action) => {
        state.status = "idle";
     
        state.placeData=action.payload;
     
      });
  },
});



export const { addToPlace } = apiSlice.actions;

export default apiSlice.reducer;
