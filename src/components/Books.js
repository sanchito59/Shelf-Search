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
      searchField: '',
      sort: ''
    }
  }

  searchBook = (e) => {
    e.preventDefault();
    request
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: this.state.searchField })
      .then((data) => {
        const cleanData = this.manageResponseProperties(data)
        // able to pass cleanData into books instead of the spread of 'data.body.items' because it is a managed response in a mapped format
        this.setState({ books: cleanData })
      })
  }

  handleSearch = (e) => {
    this.setState({ searchField: e.target.value })
  }

  handleSort = (e) => {
    this.setState({ sort: e.target.value })
    console.log(e.target.value);
  }

  manageResponseProperties = (data) => {
    const cleanData = data.body.items.map((book) => {
      if (book.volumeInfo.hasOwnProperty('publishedDate') === false) {
        // this value is temporary while working on sort functionality
        book.volumeInfo['publishedDate'] = '0000';
      } else if (book.volumeInfo.hasOwnProperty('imageLinks') === false) {
        // if the imageLinks.thumbnail property doesn't exist, one is created passing in a hosted image of 'BOOK COVER NOT AVAILABLE' from imgur
        book.volumeInfo['imageLinks'] = { thumbnail: 'https://i.imgur.com/J5LVHEL.jpg' }
      }
      return book;
    })
    // new, managed response from mapping
    return cleanData;
  }

  render() {
    return (
      <div>
        <SearchArea
          handleSearch={this.handleSearch}
          handleSort={this.handleSort}
          searchBook={this.searchBook}
        />
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default Books;