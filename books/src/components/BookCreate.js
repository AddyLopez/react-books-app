import { useState } from "react";

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input value={title} onChange={handleChange} />
        <button>Add Book</button>
      </form>
    </div>
  );
};

export default BookCreate;
