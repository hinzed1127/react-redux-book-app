import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title}
                    onClick ={ () => this.props.selectBook(book) }
                    className='list-group-item'>
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

//this function is the glue between React and Redux
function mapStateToProps(state) {
    //whatever is returned here is going to show up
    //as props inside of BookList (ie, as this.props)
    return {
        books: state.books
    };
}

// Anything returned from this function will end up as props on the 
// BookList container. I.e, this function will enable us to make the function
// call 'this.props.selectBook() on the Booklist container object'
function mapDispatchToProps(dispatch) {
    //When selectBook is called, the result should be passed through
    //to all of the reducers in the application. This is specifically here to take 
    //The action's results and flow through the reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//To promote booklist from a component to a container, it needs to new about the dispatch methods.
//This call makes the actions available as props to BookList
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
