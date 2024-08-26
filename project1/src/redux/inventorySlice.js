import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inventory: [],
  reorderRequests: [],
  alerts: [],
};

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.inventory.push(action.payload);
    },
    removeItem: (state, action) => {
      state.inventory = state.inventory.filter(item => item.id !== action.payload);
    },
    updateItem: (state, action) => {
      const { id, updatedItem } = action.payload;
      const index = state.inventory.findIndex(item => item.id === id);
      if (index !== -1) {
        state.inventory[index] = updatedItem;
      }
    },
    addReorderRequest: (state, action) => {
      state.reorderRequests.push(action.payload);
    },
    resolveReorderRequest: (state, action) => {
      state.reorderRequests = state.reorderRequests.filter(request => request.id !== action.payload);
    },
    addAlert: (state, action) => {
      state.alerts.push(action.payload);
    },
    resolveAlert: (state, action) => {
      state.alerts = state.alerts.filter(alert => alert.id !== action.payload);
    },
  },
});

export const {
  addItem,
  removeItem,
  updateItem,
  addReorderRequest,
  resolveReorderRequest,
  addAlert,
  resolveAlert,
} = inventorySlice.actions;

export default inventorySlice.reducer;