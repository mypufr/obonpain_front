import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const PRODUCTLIST_URL = "http://localhost:3000/api/products";
const BREADCATEGORIES_URL = "http://localhost:3000/api/product-categories";

let userId;

const token = localStorage.getItem("token");

if (token) {
  const decodedToken = jwtDecode(token);
  userId = decodedToken.dataUser.id;
  // console.log(userId);
}

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

const initialState = {
  // products: updateProductsList,
  products: [],
  status: null,
  amount: 0,
  total: 0,
};

export const fetchProducts = createAsyncThunk(
  "cart/fetchProducts",
  async () => {
    try {
      const response = await axios.get(PRODUCTLIST_URL, config);
      // console.log(response.data)
      const filteredProducts = response.data.filter(
        (product) => product.status === true
      );
      // console.log(filteredProducts)

      const breadCategoriesRes = await axios.get(BREADCATEGORIES_URL);
      const breadCategories = breadCategoriesRes.data;
      // console.log(breadCategories);

      const updatedProductsList = filteredProducts.map((item) => {
        const associatedBreadType = breadCategories.find(
          (breadCategory) => breadCategory.id === item.bread_type_id
        );

        if (associatedBreadType) {
          const parts = associatedBreadType.photo.split("/");
          return {
            ...item,
            photo: parts[parts.length - 1],
            cart_quantity: 0,
          };
        } else {
          return item;
        }
      });
      console.log(updatedProductsList);
      return updatedProductsList;
    } catch (err) {
      return err.message;
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseAmount: (state, { payload }) => {
      const item = state.products.find((item) => item.id === payload.id);
      if (item) {
        item.cart_quantity++;
      }
    },
    decreaseAmount: (state, { payload }) => {
      const item = state.products.find((item) => item.id === payload.id);
      if (item) {
        item.cart_quantity--;
      }
    },
    removeItem: (state, { payload }) => {
      state.products = state.products.filter((item) => item.id !== payload.id);
    },
    addItem: (state, { payload }) => {
      const itemToAdd = state.products.find((item) => item.id === payload.id);
      if (itemToAdd) {
        state.products.push(itemToAdd);
      }
    },
    updateTotal: (state) => {
      let amount = 0;
      let totalPrice = 0;
      state.products.forEach((item) => {
        amount += item.cart_quantity;
        totalPrice += item.cart_quantity * Number(item.price);
      });
      state.amount = amount;
      // console.log(state.amount)
      state.totalPrice = Number(totalPrice).toFixed(2);
      // console.log(state.total)
    },
    emptyCart: (state) => {
      let amount = 0;
      let totalPrice;
      state.products.forEach((item) => {
        item.cart_quantity = amount;
        totalPrice =0 ;
      });
      state.amount = amount;
      console.log(state.amount)
      state.totalPrice = Number(totalPrice).toFixed(2);
      console.log(state.total)
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "suceeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllProducts = (state) => state.cart.products; // anonymous fonction: if the shape of the state ever changed, we would'nt have to go through and chaange each component, we can just change it once in the slice
export const getProductsStatus = (state) => state.cart.status;
export const getProductsError = (state) => state.cart.error;
export const getTotalPrice = (state) => state.cart.totalPrice;
export const getTotalQuantity = (state) => state.cart.amount;

export const {
  increaseAmount,
  decreaseAmount,
  removeItem,
  addItem,
  updateTotal,
  emptyCart,
} = cartSlice.actions;

export default cartSlice.reducer;

