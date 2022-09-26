import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface CategoryInterface {
  id: string;
  name: string;
  description: null | string;
  is_active: boolean;
  deleted_at: null | string,
  created_at: string;
  updated_at: string;
}

const category: CategoryInterface = {
  id: "abc",
  name: "Olive",
  description: "Earum quo at dolor tempore nisi.",
  is_active: true,
  deleted_at: null,
  created_at: "2022-08-15T10:59:09+0000",
  updated_at: "2022-08-15T10:59:09+0000"
}

export const InitialState = [
  category,
  { ...category, id: "abd", name: "Green"},
  { ...category, id: "abe", name: "Orange"},  
  { ...category, id: "abf", name: "Red"},
]

const categoriesSlice = createSlice({
  name: "categories",
  initialState: InitialState,
  reducers: {
    createCategory(state, action){},
    updateCategory(state, action){},
    deleteCategory(state, action){},
  },
});

// Selectors
export const selectCategories = (state: RootState) => state.categories


export default categoriesSlice.reducer