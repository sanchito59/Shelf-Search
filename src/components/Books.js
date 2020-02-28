import React, { Component } from 'react';
import request from 'superagent';
// Components
import SearchArea from './SearchArea';

class Books extends Component {
	constructor(props) {
		super(props);
		this.state = {
			books: [],
			searchField: ''
		}
	}

	searchBook = (e) => {
		e.preventDefault();
		request
			.get("https://www.googleapis.com/books/v1/volumes")
			.query({ q: this.state.searchField })
			.then((data) => {
				const books = data.body.items
				for (let i = 0; i < 10; i++) {
					const bookTitles = books[i].volumeInfo.title
					console.log(bookTitles);

				}
				console.log(data);
				console.log(books);
			})
	}

	handleSearch = (e) => {
		this.setState({ searchField: e.target.value })
	}

	render() {
		return (
			<div>
				<SearchArea
					handleSearch={this.handleSearch}
					searchBook={this.searchBook}
				/>
			</div>
		);
	}
}

export default Books;