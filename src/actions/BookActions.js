import {
  ADD_BOOK, REMOVE_BOOK, EDIT_BOOK, UPDATE_PROGRESS,
} from './index';

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (bookID) => ({
  type: REMOVE_BOOK,
  payload: bookID,
});

export const editBook = (bookID, newBook) => ({
  type: EDIT_BOOK,
  payload: { bookID, newBook },
});

export const updateProgress = (bookID, newBook) => ({
  type: UPDATE_PROGRESS,
  payload: { bookID, newBook },
});
