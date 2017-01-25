import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className='list-group-item'>
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
    //whaever is returned here is going to show up
    //as props inside of BookList
    return {
        books: state.books
    };
}

//connect takes two arguments; a function and a Component
export default connect(mapStateToProps)(BookList);
