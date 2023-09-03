import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updatedList } from "../store/slices/bookSlices";
function StatusBar() {
  const dispatch = useDispatch();
  const books = useSelector((state) => {
    return state.books.bookList;
  });

  const handleClick = (event) => {
    const value = event.target.value;
   
    const organizedList = [...books];
     console.log(organizedList);
    if (value === "az") {
      console.log("entre az")
      organizedList.sort((a, b) =>
        a.book.title.localeCompare(b.book.title)
        
        );
       console.log(organizedList); 
      dispatch(updatedList(organizedList));
    } else if (value === "za") {
      console.log("entre za");
      organizedList.sort((a, b) =>
        b.book.title.localeCompare(a.book.title)
      );
      console.log(organizedList); 
      dispatch(updatedList(organizedList));
    }
    dispatch(updatedList(organizedList));
  };

  return (
    <div className="flex w-full justify-between px-8 place-items-center">
      <div> {books.length} books shown</div>
      <div className="w-[250px] h-[1px] bg-gray-300"></div>
      <select onChange={handleClick}>
        <option value="az">Title(A-Z)</option>
        <option value="za">Title(Z-A)</option>
      </select>
    </div>
  );
}

export default StatusBar;
