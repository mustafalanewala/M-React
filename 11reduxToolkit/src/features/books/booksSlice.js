import { createSlice } from "@reduxjs/toolkit";

// Initial state with sample books data
const initialState = {
  books: [],
};

// Books slice for managing the library's book collection
export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    // Adds a new book to the collection with a timestamp-based ID
    addBook: (state, action) => {
      state.books.push({
        id: Date.now(),
        ...action.payload,
      });
    },
    // Removes a book from the collection by its ID
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

// Export action creators for use in components
export const { addBook, removeBook } = booksSlice.actions;

// Selector to get the books array from the state
export const selectBooks = (state) => state.books.books;

// Export the reducer for store configuration
export default booksSlice.reducer;
