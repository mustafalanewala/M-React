import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../features/books/booksSlice";

function AddBookForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      dispatch(addBook({ title, author }));
      setTitle("");
      setAuthor("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 space-y-4">
      <div className="flex w-full space-x-4">
        <div className="w-1/2">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Book Title"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="w-1/2">
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author"
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Add Book
      </button>
    </form>
  );
}

export default AddBookForm;
