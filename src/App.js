import React from "react";
import request from "superagent";
import { Switch, Route } from 'react-router-dom';
require('newrelic');
// Components
import Navlinks from "./pages/components/Navlinks";
import PoetryPage from './pages/PoetryPage';
import EventsPage from './pages/EventsPage';
import BookSearch from "./pages/BookSearch";
import Bookshelves from "./pages/Bookshelves";
import Bookshelf from "./pages/Bookshelf";
import Homepage from './pages/Homepage';
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Google API
      googleBooks: [],
      searchField: "",
      sort: "",
      ebookCheck: "",
      // OpenLibrary API
      openLibraryBooks: [],
      openLibPDFs: [],
    };
    this.searchForBooks = this.searchForBooks.bind(this);
  }

  searchGoogleBooks = e => {
    e.preventDefault();
    if (this.state.ebookFilter === 'ebook-param') {
      request
        .get("https://www.googleapis.com/books/v1/volumes")
        .query({
          q: this.state.searchField + "&download=epub"
        })
        .then(data => {
          let cleanData;
          if (typeof data.body.items !== "undefined") {
            cleanData = this.manageResponseProperties(data);
            this.setState({ googleBooks: cleanData });
          }
          // need user notification here
        }).catch(error => {
          console.log('Uh oh, ', error);
        });
    } else {
      request
        .get("https://www.googleapis.com/books/v1/volumes")
        .query({
          q: this.state.searchField
        })
        .then(data => {
          let cleanData;
          if (typeof data.body.items !== "undefined") {
            cleanData = this.manageResponseProperties(data);
            this.setState({ googleBooks: cleanData });
          }
          // need user notification here
        }).catch(error => {
          console.log('Uh oh, ', error);
        });
    }
  };

  searchOpenLibrary = () => {
    fetch(`https://openlibrary.org/search.json?q=${this.state.searchField}`, {
      method: 'get',
    }).then(response => {
      return response.json();
    }).then(json => {
      let books = json.docs;
      // console.log('openlib: ', books);
      this.setState({ openLibraryBooks: books })
    }).catch(error => {
      console.log('Uh oh, ', error);
    })
  }

  searchForPDFs = () => {
    this.setState({ openLibPDFs: [] })
    setTimeout(() => {
      for (let i = 0; i < 100; i++) {
        if (typeof this.state.openLibraryBooks[i] !== 'undefined') {
          if (typeof this.state.openLibraryBooks[i].isbn === 'undefined') {
            // console.log('information not available');
          } else {
            let isbn = this.state.openLibraryBooks[i].isbn[0];
            fetch(
              `https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=https://openlibrary.org/api/volumes/brief/isbn/${isbn}.json`, {
              method: 'get',
            }).then(response => {
              return response.json();
            }).then(json => {
              if (json.items.length > 0) {
                this.setState({ openLibPDFs: json.items })
              } else {
                // console.log('no ebook/PDF available!');
              }
            }).catch(error => {
              console.log('error: ', error)
            })
          }
        } else {
          console.log('Hmmm, there seems to be no ISBN.');
        }
      }
    }, 1000)
  }

  searchForBooks = e => {
    this.setState({ openLibPDFs: [] }) // wipe ebooks on each search
    this.searchGoogleBooks(e);
    this.searchOpenLibrary();
    this.searchForPDFs();
  }

  handleSearch = e => {
    this.setState({ searchField: e.target.value });
  };

  handleSort = e => {
    this.setState({ sort: e.target.value });
  };

  handleEbookFilter = e => {
    this.setState({ ebookCheck: e.target.value });
  }

  manageResponseProperties = data => {
    const cleanData = data.body.items.map(book => {
      if (book.volumeInfo.hasOwnProperty("publishedDate") === false) {
        // this value is used to check prop in BookCard and display 'Not Available' if === '0000'
        book.volumeInfo["publishedDate"] = "0000";
      } else if (book.volumeInfo.hasOwnProperty("imageLinks") === false) {
        // if the imageLinks.thumbnail property doesn't exist, one is created passing in a hosted image of 'BOOK COVER NOT AVAILABLE' from imgur
        book.volumeInfo["imageLinks"] = {
          thumbnail: "https://i.imgur.com/J5LVHEL.jpg"
        };
      } else if (book.volumeInfo.industryIdentifiers[0].hasOwnProperty("indentifier") === false) {
        book.volumeInfo.industryIdentifiers[0]['indentifier'] = {
          identifier: "Unavailable"
        }
      }
      return book;
    });
    return cleanData;
  };
  render() {
    const sortedBooks = this.state.googleBooks.sort((a, b) => {
      if (this.state.sort === "Newest") {
        // substring checks 4 digit year, , i.e. '1994' or '0000' in case of manageResponseData data
        return (
          parseInt(b.volumeInfo.publishedDate.substring(0, 4)) - parseInt(a.volumeInfo.publishedDate.substring(0, 4))
        );
      } else if (this.state.sort === "Oldest") {
        // switch 'a' and 'b' to flip sort
        return (
          parseInt(a.volumeInfo.publishedDate.substring(0, 4)) - parseInt(b.volumeInfo.publishedDate.substring(0, 4))
        );
      } else if (this.state.sort === "Alphabetical") {
        if (a.volumeInfo.title < b.volumeInfo.title) {
          return -1;
        } else if (a.volumeInfo.title > b.volumeInfo.title) {
          return 1;
        }
        return 0;
      }
      return this.state.googleBooks;
    });
    return (
      <div className="App">
        <Navlinks />
        <Switch>
          <Route exact path='/' render={() => <Homepage />} />
          <Route path="/poetry" render={() => <PoetryPage />} />
          <Route path='/events' render={() => <EventsPage />} />
          <Route path='/bookshelves' render={() => <Bookshelves />} />
          <Route path='/bookshelves/:id' render={() => <Bookshelf />} />
          <Route path='/bookSearch' render={() =>
            <BookSearch
              handleSearch={this.handleSearch}
              handleSort={this.handleSort}
              handleEbookFilter={this.handleEbookFilter}
              searchForBooks={this.searchForBooks}
              books={sortedBooks}
              openLibraryBooks={this.state.openLibraryBooks}
              availableEbooks={this.state.openLibPDFs} />
          } />
        </Switch>
      </div>
    );
  }
}

export default App;
