import { IProduct } from "@/components/shared/Interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { urlForImage } from "../../../sanity/lib/image";
import { RootState } from "../store";

interface CartState {
  items: Array<IProduct>;
  totalAmount: number;
  totalQuantity: number;
  isLoading: boolean;
  error: any;
}

const initialState: CartState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
  isLoading: false,
  error: null,
};

export const fetchData = createAsyncThunk(
  "cart/fetchData",
  async (userId: string) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart/${userId}`
    );
    if (!res.ok) {
      console.log("Failed to Fetch Data from API");
    }
    const data = await res.json();
    return data;
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart(
      state: CartState,
      action: PayloadAction<{ product: IProduct; quantity: number }>
    ) {
      const newItem = action.payload.product;
      const existingItem = state.items.find((item) => item._id === newItem._id);
      state.totalQuantity = state.totalQuantity + action.payload.quantity;
      state.totalAmount =
        state.totalAmount +
        action.payload.quantity * action.payload.product.price;
      if (!existingItem) {
        const totalPrice = newItem.price * action.payload.quantity;
        state.items.push({
          ...newItem,
          // @ts-ignore
          images: urlForImage(newItem.images[0]).url(),
          quantity: action.payload.quantity,
          totalPrice,
        });
      } else {
        const totalPrice =
          existingItem.totalPrice +
          existingItem.price * action.payload.quantity;
        existingItem.quantity += action.payload.quantity;
        existingItem.totalPrice = totalPrice;
      }
    },
    removeProduct(state: CartState, action: PayloadAction<string>) {
      const productId = action.payload;
      state.items = state.items.filter((item) => item._id !== productId);
      state.totalQuantity = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalAmount = state.items.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
    },
    removeFromCart(state: CartState, action: PayloadAction<string>) {
      const productID = action.payload;
      const existingItem = state.items.find((item) => item._id === productID);
      state.totalQuantity--;
      state.totalAmount = state.totalAmount - existingItem?.price!;
      if (existingItem?.quantity === 1) {
        state.items = state.items.filter((item) => item._id === productID);
      } else {
        existingItem!.quantity--;
        existingItem!.totalPrice =
          existingItem!.totalPrice - existingItem!.price;
      }
    },
    clearCart(state) {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      const { cartItems, totalQuantity, totalAmount } = action.payload;
      state.items = cartItems;
      state.totalAmount = totalAmount;
      state.totalQuantity = totalQuantity;
      state.isLoading = false;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
export const selectIsLoading = (state: RootState) => state.cart.isLoading;
