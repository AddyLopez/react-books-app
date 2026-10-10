import { useContext } from "react";
import BooksContext from "../context/books";
import BookShow from "./BookShow";

const BookList = ({ books, onDelete, onEdit }) => {
  const value = useContext(BooksContext);

  const renderedBooks = books.map((book) => {
    return (
      <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
    );
  });

  return (
    <section className="book-list">
      {value}
      {renderedBooks}
    </section>
  );
};

export default BookList;
