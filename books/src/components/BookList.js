import BookShow from "./BookShow";

const BookList = ({ books, onDelete }) => {
  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} onDelete={onDelete} />;
  });

  return <section className="book-list">{renderedBooks}</section>;
};

export default BookList;
