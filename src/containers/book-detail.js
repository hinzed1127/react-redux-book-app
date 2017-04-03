import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
	render() {

		if (!this.props.book) {
			return <div>Select a book to get started.</div>;
		}

		return (
			<div>
				<h3>{this.props.book.title}</h3>
				<h5>{this.props.book.author}</h5>
			</div>
		);
	}
}

//EVERY container component needs this function, since
//it is HOW you connect the redux store(ie, global state)
//to individual components
function mapStateToProps(state) {
	return {
		book: state.activeBook
	};
}

export default connect(mapStateToProps)(BookDetail);