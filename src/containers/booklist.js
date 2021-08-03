/* eslint-disable import/no-cycle */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/jsx-key */

import { connect } from 'react-redux';
import Book from '../components/book';
import CategorySelect from '../components/categorySelect';

const booklist = (props) => {
  let books = [];
  for (const [key, value] of Object.entries(props.books)) {
    books.push([[key], value]);
  }
  books = books.map((newBook) => <Book book={newBook[1]} id={newBook[0]} />);

  const noBooks = (
    <div className="text-center no-books py-5">
      Add books to display them here.
    </div>
  );
  return (
    <div className="book-list d-flex flex-column">
      <div className="d-flex justify-content-between">
        <div className="book-list-header">ALL BOOKS</div>
        <CategorySelect />
      </div>

      {books.length === 0 ? noBooks : books}
    </div>
  );
};
const mapStateToProps = (state) => {
  let books = {};
  if (state.Category.category === 'All') {
    books = state.Books;
  } else {
    const tempData = {};
    for (const index in state.Books) {
      if (state.Books[index].category === state.Category.category) {
        tempData[index] = state.Books[index];
      }
    }
    books = tempData;
  }
  return { books };
};
export default connect(mapStateToProps, null)(booklist);
