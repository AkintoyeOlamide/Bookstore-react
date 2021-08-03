import {
  ADD_BOOK,
  REMOVE_BOOK,
  EDIT_BOOK,
  UPDATE_PROGRESS,
} from '../actions/index';

const initialState = {
  [Math.floor(Math.random() * 100000)]: {
    title: 'How successful people think',
    author: 'John C Maxwell',
    pages: 800,
    pagesread: 67,
    chapter: 9,
    chapterName: 'Going for it',
    category: 'Learning',
  },
};

const BooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        [Math.floor(Math.random() * 100000)]: {
          title: action.payload.title,
          author: action.payload.author,
          pages: action.payload.pages,
          pagesread: action.payload.pagesread,
          category: action.payload.category,
          chapter: action.payload.chapter,
          chapterName: action.payload.chapterName,
        },
      };

    case EDIT_BOOK: {
      const books = state;
      delete books[action.payload.bookID];
      return {
        ...books,
        [action.payload.bookID]: {
          ...action.payload.newBook,
        },
      };
    }

    case REMOVE_BOOK: {
      const books = state;
      delete books[action.payload];
      return {
        ...books,
      };
    }

    case UPDATE_PROGRESS: {
      const books = state;
      delete books[action.payload];
      return {
        ...books,
        [action.payload.bookID]: {
          ...action.payload.newBook,
        },
      };
    }
    default:
      return state;
  }
};

export default BooksReducer;
