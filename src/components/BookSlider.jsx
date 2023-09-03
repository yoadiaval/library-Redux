import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { useState } from "react";
import { useSelector } from "react-redux";
import Link from "./Link";

function BookSlider() {
  //const { books } = useContext(BooksContext);
  const books = useSelector((state) => {
    return state.books.dataBooks;
  });
  const [dataBook, setDataBook] = useState(books);
  const [pos, setPos] = useState(3);

  const handleSlideRgt = () => {
    const newpos = pos + 1;
    if (newpos >= books.length - 3) {
      return setPos(0);
    }
    setPos(newpos);
  };

  const handleSlideLft = () => {
    const newpos = pos - 1;
    if (newpos <= 3) {
      return setPos(books.length - 3);
    }
    setPos(newpos);
  };
  return (
    <div className="flex flex-col place-items-center">
      <h1 className="mt-[50px] text-4xl font-bold ">Featured Products</h1>
      <div className="w-[250px] h-[15px] m-[-10px] z-[-1] bg-amber-400"></div>
      <div className="flex flex-col md:flex-row place-content-center place-items-center my-[60px] h-[500px]">
        <GoChevronLeft
          size={50}
          onClick={handleSlideLft}
          className="ease-in-out duration-500"
        />
        <div className="flex space-x-6 place-content-center items-center">
          <figure className=" opacity-25 w-[100px] sm:w-[200px] md:w-[250px]">
            <img
              className="w-[100%] h-auto "
              src={dataBook[pos].book.cover}
              alt="cover libro"
            />
          </figure>
          <figure className=" w-[150px] sm:w-[250px] md:w-[300px] drop-shadow-xl">
            <img src={dataBook[pos + 1].book.cover} alt="cover libro" />
          </figure>
          <figure className=" opacity-25 w-[100px] sm:w-[200px] md:w-[250px]">
            <img src={dataBook[pos + 2].book.cover} alt="cover libro" />
          </figure>
        </div>
        <GoChevronRight size={50} onClick={handleSlideRgt} />
      </div>
      <Link
        to="/products"
        className=" text-white text-center bg-black w-[150px] rounded-md font-medium my-6 mx-auto py-3"
      >
        All Books
      </Link>
    </div>
  );
}

export default BookSlider;
