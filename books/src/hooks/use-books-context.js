import { useContext } from "react";
import BooksContext from "../context/books";

// custom hook for reusable code
function useBooksContext() {
  return useContext(BooksContext);
}

export default useBooksContext;
