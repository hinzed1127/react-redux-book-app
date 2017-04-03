import { combineReducers } from 'redux';
import BooksReducer from './books.reducer';
import ActiveBook from './active-book.reducer';

//Mapping of our state
//Any key that is provided in the object args
//to combineReducers is added as a key on the global state
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
