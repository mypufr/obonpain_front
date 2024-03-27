import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import axios from "axios";


const DELIVERY_DATES_URL = "http://localhost:3000/api/places/dates"

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
dates:[],
status: null
}

export const fetchDeliveryDates = createAsyncThunk('delivery/fetchDeliveryDates', async()=> {
  try {
    const datesRes = await axios.get(DELIVERY_DATES_URL, config);  

    const deliveryDates = datesRes.data;
    
    console.log(deliveryDates);

    return deliveryDates

  } catch (err) {
    // return err.message;
    throw new Error(err.message); 
  }
})

const datesSlice = createSlice({

name: "deliveryDates",
initialState,
reducers:{

},
extraReducers(builder){
  builder
  .addCase(fetchDeliveryDates.pending, (state, action)=> {
   state.status = "loading"
  })
  .addCase(fetchDeliveryDates.fulfilled, (state, action)=>{
    state.status = "suceeded"
    state.dates = action.payload
  })
  .addCase(fetchDeliveryDates.rejected, (state, action)=>{
    state.status = 'failed'
    state.error = action.error.message
   })
 } 
})

export const selectAllDates = (state)=> state.deliveryDates.dates;
export const getDatesStatus = (state)=> state.deliveryDates.status;
export const getDatesError = (state)=> state.deliveryDates.error;

export default datesSlice.reducer;