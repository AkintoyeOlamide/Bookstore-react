/* eslint-disable react/jsx-indent */
/* eslint-disable import/no-cycle */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { connect, Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import { removeBook } from '../actions/BookActions';
import UpdateProgress from './updateProgress';
import EditBook from './editBook';
import store from '../index';

const book = (props) => {
  const completed = ((props.book.pagesread) / (props.book.pages)) * 100;
  const calculateProgress = {
    width: (completed * 3),
  };

  const handleProgress = () => {
    const modal = document.querySelector('.modall');
    ReactDOM.render(<Provider store={store}>
      <UpdateProgress book={props.book} bookID={props.id[0]} />
                    </Provider>, modal);
    modal.classList.add('show-modal');
  };

  const handleEdit = () => {
    const modal = document.querySelector('.modall');
    ReactDOM.render(<Provider store={store}>
      <EditBook book={props.book} bookID={props.id[0]} />
                    </Provider>, modal);
    modal.classList.add('show-modal');
  };

  return (
    <div className="book d-flex justify-content-between">
      <div className="book-left d-flex flex-column">
        <div className="category text-grey">{props.book.category}</div>
        <div className="title">
          {props.book.title}
        </div>
        <div className="author">
          {props.book.author}
        </div>
        <div className="actions">
          <ul className="d-flex align-items-center  text-decoration-none list-style-none">
            <li>
              <a
                href="#"
                onClick={() => {
                  props.removeBook(props.id[0]);
                }}
              >
                Remove
              </a>
              <a
                href="#"
                onClick={handleEdit}
                className="ml-4"
              >
                Edit
              </a>

            </li>
          </ul>
        </div>
      </div>

      <div className="book-right d-flex  align-items-center ">
        <div className="prog mr-5 justify-content-center align-items-center py-2 ">
          <div className="h3  d-flex completed p-0 m-0 ">
            {Math.floor(completed)}
            %
            <p className="p-0 m-0 ml-2">
              Completed
            </p>
          </div>
          <div className="progress mr-5 mt-2">
            <div className="progress-bar" role="progressbar" style={calculateProgress} aria-valuenow={completed} aria-valuemin="0" aria-valuemax="100">
              <p />
            </div>
          </div>

        </div>

        <div className="current ml-5">
          <p className="current-chapter">CURRENT CHAPTER</p>
          <p className="chapter-name">
            CHAPTER
            <span> </span>
            {props.book.chapter}
            :
            &quot;
            {props.book.chapterName}
            &quot;
          </p>
          <button type="button" onClick={handleProgress} className="btn update-progress btn-primary px-5">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  book: ownProps.book,
});
const mapDispatchToProps = (dispatch) => ({
  removeBook: (bookID) => dispatch(removeBook(bookID)),
});

export default connect(mapStateToProps,
  mapDispatchToProps)(book);
