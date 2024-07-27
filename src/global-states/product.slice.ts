//global state management for the add to product page
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductSliceTypes } from "../typedefs/product.slice";

const initialState: ProductSliceTypes = {
  itemName: "",
  itemDescription: "",
  itemCategory: "",
  itemAvailability: false,
  itemMaterial: "",
  itemBrand: "",
  itemImages: [],
  itemType: "",
  itemPrice: "",
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    updateItemName: (state, action: PayloadAction<string>) => {
      state.itemName = action.payload;
    },
    updateItemDescription: (state, action: PayloadAction<string>) => {
      state.itemDescription = action.payload;
    },
    updateItemCategory: (state, action: PayloadAction<string>) => {
      state.itemCategory = action.payload;
    },
    updateItemAvailability: (state, action: PayloadAction<boolean>) => {
      state.itemAvailability = action.payload;
    },
    updateItemMaterial: (state, action: PayloadAction<string>) => {
      state.itemMaterial = action.payload;
    },
    updateItemPrice: (state, action: PayloadAction<string>) => {
      state.itemPrice = action.payload;
    },
    updateItemBrand: (state, action: PayloadAction<string>) => {
      state.itemBrand = action.payload;
    },
    updateItemType: (state, action: PayloadAction<string>) => {
      state.itemBrand = action.payload;
    },
    //map over images to update the individual images
    updateItemImages: (state, action: PayloadAction<string[]>) => {
      //loop through the items to get the images individually
      state.itemImages = action.payload;
    },
  },
});

export const {
  updateItemAvailability,
  updateItemBrand,
  updateItemCategory,
  updateItemDescription,
  updateItemImages,
  updateItemMaterial,
  updateItemName,
  updateItemPrice,
  updateItemType,
} = productSlice.actions;

export default productSlice.reducer;
