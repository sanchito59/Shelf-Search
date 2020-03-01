import React, { Component } from 'react';
import request from 'superagent';
import './../App.css';
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
        // Sample response for multiple books
        // console.log(data.body.items)

        // Sample response for one book
        console.log(data.body.items[0])

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
        // this value is used to check prop in BookCard and display 'Not Available' if === '0000'
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
    const sortedBooks = this.state.books.sort((a, b) => {
      if (this.state.sort === "Newest") {
        // substring checks 4 digit year, , i.e. '1994' or '0000' in case of manageResponseData dummy data
        return parseInt(b.volumeInfo.publishedDate.substring(0, 4)) - parseInt(a.volumeInfo.publishedDate.substring(0, 4));
      } else if (this.state.sort === "Oldest") {
        // switch 'a' and 'b' to flip sort
        return parseInt(a.volumeInfo.publishedDate.substring(0, 4)) - parseInt(b.volumeInfo.publishedDate.substring(0, 4));
      } else if (this.state.sort === "Alphabetical") {
        if (a.volumeInfo.title < b.volumeInfo.title) {
          return -1;
        } else if (a.volumeInfo.title > b.volumeInfo.title) {
          return 1;
        }
        return 0;
      }
      return this.state.books;
    })
    return (
      <div>
        <SearchArea
          handleSearch={this.handleSearch}
          handleSort={this.handleSort}
          searchBook={this.searchBook}
        />
        {/* sortedBooks defaults to the cleanData unless triggered */}
        <BookList books={sortedBooks} />
      </div>
    );
  }
}

export default Books;