import { createSlice} from '@reduxjs/toolkit';
import { jwtDecode } from "jwt-decode";


const authSlice = createSlice ({

  name: 'auth',
  initialState: {
   token: "",
   userId: "",
  },

  reducers:{
  setToken: (state, action) => {
    state.token = action.payload.token;
    state.userId = action.payload.useId;
  },
 },
});
  
  
  export const { setToken } = authSlice.actions;
  
  export const selectToken = (state) => state.auth.token;
  export const selectUserId = (state) => state.auth.userId;

  
  export const initToken = ()=>(dispatch) => {
    
    const token = localStorage.getItem("token"); 
    
    if (token) {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.dataUser.id;
    console.log(userId);
    dispatch(setToken({token, userId}))
  }
  
}


export default authSlice.reducer;



  
  