import BookCard from "./BookCard";
import { useSelector } from "react-redux";
function BookList() {
  //const dispatch = useDispatch();

  const  bookList  = useSelector((state) => {
    return  state.books.bookList
  });

  /*
  const booksbyGenre = books.filter((item) => {
    if (genretoSearch !== "all") {
      return item.book.genre.includes(genretoSearch);
    }
    return books;
  });

  
  const booksbySearchTerm = books.filter((item) => {
    return item.book[filterInProp].toLowerCase()
      .includes(searchTerm.toLowerCase());
  });
 
*/
  const renderedList = bookList.map((item, index) => {
    return <BookCard key={index} value={item.book} />;
  });

  return (
    <div className="grid grid-cols-1 gap-y-6 justify-items-center sm:gap-x-5 sm:grid-cols-2 lg:grid-cols-4">
      {renderedList}
    </div>
  );
}

export default BookList;
