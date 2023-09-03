import { useSelector, useDispatch } from "react-redux";
import {
  updatedList,
  filterByProp,
  filterSearchTerm,
  filterByRange,
  clearAll,
} from "../store/main";

//import { store } from "../store/main";

function SideBar() {
  const dispatch = useDispatch();

  const { books, allGenres, prop, searchTerm, range } = useSelector(
    (state) => {
      return {
        books: state.books.dataBooks,
        prop: state.books.prop,
        searchTerm: state.books.searchTerm,
        allGenres: state.books.genres,
        filterProp: state.books.filterInProp,
        range: state.books.range,
      };
    }
  );

  const handleGenre = (item) => {
    const booksbyGenre = books.filter((book) => {
      if (item !== "all") {
        return book.book.genre.includes(item);
      }
      return books;
    });
    dispatch(updatedList(booksbyGenre));
    //const state = JSON.stringify(store.getState().books.bookList); //obtiene el state luego de modificarlos mediante la línea anterior
    //console.log(state);
  };

  const handleSelection = (event) => {
    dispatch(filterByProp(event.target.value));
  };

  const handlChange = (event) => {
    const value = event.target.value;
    dispatch(filterSearchTerm(value));
    const bookBySelection = books.filter((book) => {
      return book.book[prop]
        .toString()
        .toLowerCase()
        .match(value.toLowerCase());
    });
    dispatch(updatedList(bookBySelection));
  };
  const HandleNumPages = (event) => {
    const value = event.target.value;
    dispatch(filterByRange(value));
    const bookBySelection = books.filter((book) => {
      return book.book.pages <= value;
    });
    dispatch(updatedList(bookBySelection));
  };

  const handleClear = () => {
    dispatch(clearAll());
  };

  const renderedGenre = allGenres.map((item, index) => {
    return (
      <li
        className=""
        key={index}
        onClick={() => {
          handleGenre(item);
        }}
      >
        {item}
      </li>
    );
  });

  return (
    <div className="flex min-w-fit flex-col space-y-9 bg-stone-200 p-6 rounded-xl">
      <div>
        <select onChange={handleSelection}>
          <option value="Nothing selected">Search a book By</option>
          <option value="title">Title</option>
          <option value="year">Year</option>
          <option value="ISBN">ISBN</option>
          <option value="author">Author</option>
        </select>
        <input
          onChange={handlChange}
          placeholder={prop}
          value={searchTerm}
          className="border  bg-gray-100 px-2"
        />
      </div>
      <div>
        <h3>Filter By Page</h3>
        <input
          type="range"
          min="0"
          max="1200"
          value={range}
          onChange={HandleNumPages}
        />
        <p> Valor actual: {range} </p>
      </div>
      <div>
        <h2 className="font-bold">Filter By Genre</h2>
        <ul className="text-slate-500">{renderedGenre}</ul>
      </div>

      <button
        onClick={handleClear}
        className="bg-black text-white rounded w-fit py-1 px-2"
      >
        Clear All
      </button>
    </div>
  );
}
export default SideBar;
