import { useState } from "react";

const BookEdit = ({ bookTitle }) => {
  const [title, setTitle] = useState(bookTitle);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("New title ", title);
  };

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button">Save</button>
    </form>
  );
};

export default BookEdit;
