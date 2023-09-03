import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./pages/Products";
import Route from "./components/Route";
import About from "./pages/About";
import Home from "./pages/Home";
//import { useEffect, useContext } from "react";
//import BooksContext from "./context/Books";

function App() {

  /*
const { fetchSelectedBooks } = useContext(BooksContext);

useEffect(() => {
  fetchSelectedBooks();
}, [fetchSelectedBooks]);
*/

  return (
    <div>
      <div className="bg-black">
        <Header />
      </div>
      <Route path="/">
        <div>
          <Home />
        </div>
      </Route>
      <Route path="/about">
        <div>
          <About />
        </div>
      </Route>
      <Route path="/products">
        <div>
          <Products />
        </div>
      </Route>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
