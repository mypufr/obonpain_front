import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import axios from "axios";


const DELIVERY_PLACES_URL = "http://localhost:3000/api/places"



let userId;

const token = localStorage.getItem("token"); 


if (token) {
  const decodedToken = jwtDecode(token);
  userId = decodedToken.dataUser.id;
  // console.log(userId);
}

const config = {
  headers: {
    Authorization: `Bearer ${token}`
  }
}

const initialState = {
places:[],
status: null
}

export const fetchDeliveryPlaces = createAsyncThunk('delivery/fetchDeliveryPlaces', async()=> {
  try {
    const placesRes = await axios.get(DELIVERY_PLACES_URL, config);  

    const deliveryPlaces = placesRes.data;
    console.log(deliveryPlaces);

    return deliveryPlaces

  } catch (err) {
    return err.message;
  }
})

const placesSlice = createSlice({

name: "deliveryPlaces",
initialState,
reducers:{

},
extraReducers(builder){
  builder
  .addCase(fetchDeliveryPlaces.pending, (state, action)=> {
   state.status = "loading"
  })
  .addCase(fetchDeliveryPlaces.fulfilled, (state, action)=>{
    state.status = "suceeded"
    state.places = action.payload
  })
  .addCase(fetchDeliveryPlaces.rejected, (state, action)=>{
    state.status = 'failed'
    state.error = action.error.message
   })
 } 
})

export const selectAllPlaces = (state)=> state.deliveryPlaces.places;
export const getPlacesStatus = (state)=> state.deliveryPlaces.status;
export const getPlacesError = (state)=> state.deliveryPlaces.error;

export default placesSlice.reducer;