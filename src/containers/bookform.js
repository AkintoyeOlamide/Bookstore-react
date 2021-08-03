import { connect } from 'react-redux';
import React, { useState } from 'react';
import { addBook } from '../actions/BookActions';
import categories from '../utils/cat';
import changeCategory from '../actions/categoryActions';

const bookForm = (props) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState('');
  const [category, setCategory] = useState('');
  const [pagesread, setPagesread] = useState('');
  const [chapter, setChapter] = useState('');
  const [chapterName, setChapterName] = useState('');
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
    props.addBook(book);
    props.changeCategory('All');
    document.getElementById('categories').value = 'All';
    document.querySelector('.book-list-header').innerText = 'ALL BOOKS';
  };

  const displayCategories = [];
  categories.map((cat) => displayCategories.push(<option value={cat}>{cat}</option>));

  return (
    <form onSubmit={submitHandler} className=" book-form">
      <div className="form-header">ADD NEW BOOK</div>
      <div className="form-body d-flex row m-0  w-100">
        <div className="col-12 row p-0 justify-content-between">
          <div className="col-3 input">
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
          <div className="col-3 input">
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
          <div className="col-3 input">
            <select
              name="category"
              id="category"
              required
              onChange={(e) => setCategory(e.target.options[e.target.selectedIndex].value)}
              className=" w-100 form-select"
            >
              <option value="" disabled selected>
                Category
              </option>
              {displayCategories}
            </select>
          </div>
          <div className="col-3 input">
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
          <div className="col-3 input">
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
          <div className="col-3 input">
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
          <div className="col-3 input">
            <input
              className="book-current-chapter-name  w-100"
              type="text"
              placeholder="Chapter name"
              name="current-chapter-name"
              value={chapterName}
              onChange={(e) => setChapterName(e.target.value)}
            />
          </div>
          <div className="button col-3 input justify-content-center align-items-center">
            <button type="submit" className=" btn btn-primary w-100 btn-lg ">
              Add Book
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addBook: (book) => dispatch(addBook(book)),
  changeCategory: (category) => dispatch(changeCategory(category)),
});

export default connect(null, mapDispatchToProps)(bookForm);
