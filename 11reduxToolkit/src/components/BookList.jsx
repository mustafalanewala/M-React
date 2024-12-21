import { useSelector, useDispatch } from 'react-redux';
import { selectBooks, removeBook } from '../features/books/booksSlice';

/**
 * BookList Component
 * Displays a list of books and provides functionality to remove books
 * Uses Redux for state management
 */
function BookList() {
  // Get books data from Redux store
  const books = useSelector(selectBooks);
  // Get dispatch function to trigger actions
  const dispatch = useDispatch();

  return (
    <div className="space-y-4">
      {/* Map through books array to render each book */}
      {books.map((book) => (
        <div
          key={book.id}
          className="p-4 border rounded shadow-sm flex justify-between items-center"
        >
          {/* Display book title and author in a single line */}
          <p className="font-medium">
            {book.title} - <span className="text-gray-600">{book.author}</span>
          </p>
          {/* Remove button dispatches removeBook action with book ID */}
          <button
            onClick={() => dispatch(removeBook(book.id))}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default BookList;