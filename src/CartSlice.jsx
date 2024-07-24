import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const plant = action.payload;
      const { name, cost } = plant;
      const existingPlant = state.items.find((p) => p.name === name);
      if (existingPlant) {
        existingPlant.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const name = action.payload;
      const existingPlant = state.items.find((p) => p.name === name);

      if (existingPlant) {
        state.items = state.items.filter((item) => item.name !== name);
      }
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;

      const plant = state.items.find((plant) => plant.name === name);

      if (plant) {
        plant.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
