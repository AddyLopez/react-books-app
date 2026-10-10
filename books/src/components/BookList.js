import useBooksContext from "../hooks/use-books-context";
import BookShow from "./BookShow";

const BookList = () => {
  const { books } = useBooksContext();

  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return <section className="book-list">{renderedBooks}</section>;
};

export default BookList;
