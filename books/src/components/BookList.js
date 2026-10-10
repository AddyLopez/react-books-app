import BookShow from "./BookShow";

const BookList = ({ books, onDelete, onEdit }) => {
  const renderedBooks = books.map((book) => {
    return (
      <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
    );
  });

  return <section className="book-list">{renderedBooks}</section>;
};

export default BookList;
