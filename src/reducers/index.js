import { combineReducers } from 'redux';
import BooksReducer from './books.reducer'; 

//mapping of our state
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
