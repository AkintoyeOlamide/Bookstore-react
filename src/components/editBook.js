/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/style-prop-object */
import { connect } from 'react-redux';
import React, { useState } from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { editBook } from '../actions/BookActions';

const EditBook = (props) => {
  const [title, setTitle] = useState(props.oldBook.title);
  const [author, setAuthor] = useState(props.oldBook.author);
  const [pages, setPages] = useState(props.oldBook.pages);
  const [category, setCategory] = useState(props.oldBook.category);
  const [pagesread, setPagesread] = useState(props.oldBook.pagesread);
  const [chapter, setChapter] = useState(props.oldBook.chapter);
  const [chapterName, setChapterName] = useState(props.oldBook.chapterName);
  const submitHandler = (e) => {
    e.preventDefault();
    const book = {
      title,
      author,
      pages,
      pagesread,
      category,
      chapter,
      chapterName,
    };
    props.editBook(props.bookID, book);

    unmountComponentAtNode(document.querySelector('.modall'));
    document.querySelector('.modall').classList.remove('show-modal');
  };

  const categories = [
    'Action',
    'Drama',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Science Fiction',
  ];
  const displayCategories = [];
  categories.map((cat) => {
    if (cat === props.oldBook.category) {
      return displayCategories.push(
        <option selected value={cat}>
          {cat}
        </option>,
      );
    }
    return displayCategories.push(<option value={cat}>{cat}</option>);
  });
  return (
    <form onSubmit={submitHandler} className="book-edit-form mt-5">
      <div className="form-header form-edit-header m-x-auto h1 text-center my-5">
        EDIT BOOK
      </div>
      <div className="form-body d-flex row m-auto  w-50">
        <div className="col-12 row p-0 justify-content-between">
          <div className="col-12 input">
            <input
              className="book-name  w-100"
              type="text"
              placeholder="Book title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="col-12 input">
            <input
              className="book-author  w-100"
              type="text"
              placeholder="Author"
              name="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <div className="col-12 input">
            <select
              name="category"
              id="category"
              required
              onChange={(e) => setCategory(e.target.options[e.target.selectedIndex].value)}
              className=" w-100 form-select"
            >
              <option value="" disabled>
                Category
              </option>
              {displayCategories}
            </select>
          </div>
          <div className="col-12 input">
            <input
              className="book-pages  w-100"
              type="number"
              placeholder="Number of pages"
              min="0"
              step="1"
              name="pages"
              value={pages}
              onChange={(e) => setPages(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="col-12 p-0 row justify-content-between">
          <div className="col-12 input">
            <input
              className="book-pages-read  w-100"
              type="number"
              placeholder="Pages read"
              min="0"
              step="1"
              name="pages-read"
              value={pagesread}
              onChange={(e) => setPagesread(e.target.value)}
              required
            />
          </div>
          <div className="col-12 input">
            <input
              className="book-current-chapter  w-100"
              type="number"
              min="0"
              step="1"
              placeholder="Current Chapter"
              name="current-chapter"
              value={chapter}
              onChange={(e) => setChapter(e.target.value)}
              required
            />
          </div>
          <div className="col-12 input">
            <input
              className="book-current-chapter-name  w-100"
              type="text"
              placeholder="Chapter name"
              name="current-chapter-name"
              value={chapterName}
              onChange={(e) => setChapterName(e.target.value)}
            />
          </div>
          <div className="button col-12 input justify-content-center align-items-center">
            <button type="submit" className=" btn btn-primary w-100 btn-lg ">
              Edit Book
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = (state, ownProps) => ({
  oldBook: ownProps.book,
  bookID: ownProps.bookID,
});

const mapDispatchToProps = (dispatch) => ({
  editBook: (bookID, book) => dispatch(editBook(bookID, book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditBook);
