import { combineReducers } from 'redux';
import BooksReducer from './books';
import CategoriesReducer from './categories';

const rootReducer = combineReducers({
  Books: BooksReducer,
  Category: CategoriesReducer,
});

export default rootReducer;
