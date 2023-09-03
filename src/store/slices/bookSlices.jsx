import { createSlice } from "@reduxjs/toolkit";
import library from "../../data.jsx";
const genres = ["all", ...new Set(library.map((item) => item.book.genre))];

const bookSlice = createSlice({
  name: "books",
  initialState: {
    dataBooks: library,
    genres: genres,
    bookList:[],
    prop: "title",
    searchTerm: "",
    range: "1200",
  },
  reducers: {
    updatedList(state,action){
      state.bookList = action.payload;
    },
    filterByProp(state, action) {
      state.prop = action.payload;
    },
    filterSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    filterByRange(state, action){
      state.range = action.payload;
    },

    clearAll(state,action){
      state.bookList = library;
      state.prop = "Nothing Selected";
      state.searchTerm = "";
      state.range = "1200";
    }
  },
});



export {bookSlice}
export const bookReducer = bookSlice.reducer;
export const {
  filterGenre,
  filterByProp,
  filterSearchTerm,
  filterByRange,
  updatedList,
  clearAll,
} = bookSlice.actions;