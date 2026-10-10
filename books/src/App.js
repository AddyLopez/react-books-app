import { useState } from "react";
import BookCreate from "./components/BookCreate";

const App = () => {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updatedBooks = [...books, { id: 123, title }]; // Must create a new array for change in state (i.e. adding a new book object) to trigger a re-render
    setBooks(updatedBooks);
  };

  return (
    <div>
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default App;
