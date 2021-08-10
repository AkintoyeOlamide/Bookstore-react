/*eslint-disable*/
import { REMOVE_BOOK, CREATE_BOOK } from "../actions/index";

const books = [
  {
    ID: 1,
    title: "Fringe",
    category: "Sci-fi",
  },
  {
    ID: 2,
    title: "Peaky Blinders",
    category: "Action",
  },
  {
    ID: 3,
    title: "Game of Thrones",
    category: "History",
  },
];

const bookReducer = (state = books, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.ID !== action.ID);
    default:
      return state;
  }
};

export default bookReducer;
