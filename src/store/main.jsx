import { configureStore } from "@reduxjs/toolkit";
import {
  bookReducer,
  updatedList,
  filterGenre,
  filterByProp,
  filterSearchTerm,
  filterByRange,
  clearAll,
} from "./slices/bookSlices";

const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});

//store.dispatch(filterGenre("zombies")); //hago pruebas en los reducers
//const state = JSON.stringify(store.getState().books.genreToSearch); //obtiene el state luego de modificarlos mediante la línea anterior
//console.log(state);

export {
  store,
  filterGenre,
  updatedList,
  filterByProp,
  filterSearchTerm,
  filterByRange,
  clearAll,
};
