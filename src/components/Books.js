import React, { Component } from 'react';
import request from 'superagent';
// Components
import SearchArea from './SearchArea';
import BookList from './BookList';

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
        // console.log(data.body.items[0]);
        console.log(data.body.items[0].volumeInfo.imageLinks.thumbnail);
        this.setState({ books: [...data.body.items] })
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
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default Books;