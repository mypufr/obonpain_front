import authReducer from "./authReducer.jsx";
import breadReducer from "./breadReducer.jsx";
import cartReducer from "./cartReducer.jsx";
import deliveryDatesReducer from "./deliveryDatesReducer.jsx";
import deliveryReducer from "./deliveryReducer.jsx";

const reducer = {
  bread: breadReducer,
  cart: cartReducer,
  deliveryPlaces: deliveryReducer,
  deliveryDates: deliveryDatesReducer,
  auth:authReducer
  
};

export default reducer;
