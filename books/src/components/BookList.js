import BookShow from "./BookShow";

const BookList = ({ books }) => {
  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return <section className="book-list">{renderedBooks}</section>;
};

export default BookList;
