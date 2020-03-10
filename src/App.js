// Functionality
import React from "react";
import request from "superagent";
import { Switch, Route } from 'react-router-dom';
// Components
import Header from "./components/Header";
import PoetryPage from './components/PoetryPage';
import EventsPage from './components/EventsPage';
import SearchArea from "./components/SearchArea";
import NYTBestsellers from './components/NYTBestsellers';
// Style/Assets
import "./App.css";
// Secrets
const NYT_KEY = process.env.REACT_APP_NYT_KEY;
const GOOD_READS_KEY = process.env.REACT_APP_GOOD_READS_KEY
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Google API
      isLoggedIn: false,
      name: "",
      email: "",
      url: "",
      access_token: "",
      googleBooks: [],
      searchField: "",
      sort: "",
      ebookCheck: "",
      // NYT API
      NYTBestsellers: [],
      bestsellerISBNs: [],
      bestSellerCoverLinks: [],
      // Poems One API
      poemOfDay: [],
      // OpenLibrary API
      openLibraryBooks: [],
      openLibPDFs: [],
      // PoetryDB API
      poetryDBpoems: [],
      poemSearchField: '',
      // GoodReads API
      bookEvents: [],
      eventSearchField: '',
    };
    // this.searchGoogleBooks = this.searchGoogleBooks.bind(this);
    // this.searchOpenLibrary = this.searchOpenLibrary.bind(this);
    this.poemSearch = this.poemSearch.bind(this);
    this.findAuthorEvents = this.findAuthorEvents.bind(this);
    this.searchForBooks = this.searchForBooks.bind(this);
  }

  // responseGoogle = response => {
  //   console.log(window)
  //   console.log("responseGoogle", response);
  //   this.setState({ name: response.profileObj.name });
  //   this.setState({ email: response.profileObj.email });
  //   this.setState({ url: response.profileObj.imageUrl });
  //   this.setState({ access_token: response.accessToken });
  //   console.log('state:', this.state);
  // };

  getBestsellersNYT = () => {
    fetch('https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=' + NYT_KEY,
      { method: 'get', }).then(response => {
        return response.json();
      }).then(json => {
        let books = json.results;
        let bestSellerData = [];
        for (let i = 0; i < 15; i++) {
          bestSellerData.push(books[i].isbns[0].isbn10);
        }
        this.setState({ NYTBestsellers: json.results });
        this.setState({ bestsellerISBNs: bestSellerData });
      })
      .catch(error => {
        console.log('Uh oh, ', error);
      });
  }


  findAuthorEvents = () => {
    // e.preventDefault();
    const zip_input = this.state.eventSearchField;
    fetch(`https://www.goodreads.com/event/index.xml?search[postal_code]=${zip_input}&key=${GOOD_READS_KEY}`, {
      method: 'get',
    }).then(response => {
      return response.text();
    }).then(function (data) {
      console.log('parsed data: ', data);
      let parser = new DOMParser();
      let xmlDoc = parser.parseFromString(data, 'text/html');
      let events = xmlDoc.getElementsByTagName('event');
      // All Events
      // console.log(events);
      // One Event
      console.log(events[0]);
      // Event Title
      // console.log(events[0].childNodes[5].innerText);
      // Event Speaker
      // console.log(events[0].childNodes[?].innerText);
      // Event Address
      // console.log(events[0].childNodes[7].innerText);
      // Event City
      // console.log(events[0].childNodes[9].innerText);
      // Event State
      // console.log(events[0].childNodes[21].innerText);
      // let event = {};
      let eventsArray = [];
      for (let i = 0; i < events.length; i++) {
        let event = {};
        event.title = events[i].childNodes[5].innerText;
        event.address = events[i].childNodes[7].innerText;
        event.city = events[i].childNodes[9].innerText;
        event.state = events[i].childNodes[21].innerText;
        eventsArray.push(event);
      }
      console.log(eventsArray);
      return eventsArray;
    }).then(eventsArray => {
      this.setState({ bookEvents: eventsArray });
    }).catch(error => {
      console.log('author event error: ', error)
    })
  }

  searchGoogleBooks = e => {
    e.preventDefault();
    if (this.state.ebookFilter === 'ebook-param') {
      console.log('ebookfilter api state: ', this.state)
      request
        .get("https://www.googleapis.com/books/v1/volumes")
        .query({
          q: this.state.searchField + "&download=epub"
        })
        .then(data => {
          // console.log("Sample response for multiple books", data.body.items)
          // console.log("Sample response for one book: ", data.body.items[0])
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
          // console.log("Sample response for multiple books", data.body.items)
          // console.log("Sample response for one book: ", data.body.items[0])
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
      console.log('openlib: ', books);
      // console.log('one openlib book: ', json.docs[0]);
      this.setState({ openLibraryBooks: books })
    }).catch(error => {
      console.log('Uh oh, ', error);
    })
  }

  searchForPDFs() {
    setTimeout(() => {
      for (let i = 0; i < 100; i++) {
        if (typeof this.state.openLibraryBooks[i] !== 'undefined') {
          if (typeof this.state.openLibraryBooks[i].isbn === 'undefined') {
            console.log('information not available');
          } else {
            let isbn = this.state.openLibraryBooks[i].isbn[0];
            console.log('isbn: ', isbn)
            fetch(
              // const proxyurl = "https://cors-anywhere.herokuapp.com/";
              // using the heroku proxy URL to get around CORS hits the rate limit quickly
              // proxyurl + 
              `https://openlibrary.org/api/volumes/brief/isbn/${isbn}.json`, {
              method: 'get',
            }).then(response => {
              return response.json();
            }).then(json => {
              if (json.items.length > 0) {
                console.log('ebook access: ', json.items)
                this.setState({ openLibPDFs: json.items })
              } else {
                console.log('no ebook/PDF available!');
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

  poemSearch() {
    console.log('pinged!')
    const query = this.state.poemSearchField;
    fetch(`http://poetrydb.org/author/${query}`, {
      method: 'get',
    }).then(response => {
      return response.json();
    }).then(json => {
      let results = json;
      console.log('poemSearch: ', results);
      // console.log('poemSearch: ', results[0]);
      this.setState({ poetryDBpoems: results })
    }).catch(error => {
      console.log('Uh oh, ', error);
    })
  }

  componentDidMount() {
    this.findAuthorEvents();
    // this.getBestsellersNYT();
  }

  searchForBooks = e => {
    this.setState({ openLibPDFs: [] }) // Wipe EmbeddedBook in BookList each search
    this.searchGoogleBooks(e);
    this.searchOpenLibrary();
    this.searchForPDFs();
  }

  handleSearch = e => {
    this.setState({ searchField: e.target.value });
  };

  handlePoemSearch = e => {
    this.setState({ poemSearchField: e.target.value });
  }

  handleEventSearch = e => {
    this.setState({ eventSearchField: e.target.value })
    console.log(e.target.value)
  }

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
          parseInt(b.volumeInfo.publishedDate.substring(0, 4)) -
          parseInt(a.volumeInfo.publishedDate.substring(0, 4))
        );
      } else if (this.state.sort === "Oldest") {
        // switch 'a' and 'b' to flip sort
        return (
          parseInt(a.volumeInfo.publishedDate.substring(0, 4)) -
          parseInt(b.volumeInfo.publishedDate.substring(0, 4))
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
        <Header />
        <Switch>
          <Route exact path='/' render={() =>
            <NYTBestsellers bestSellers={this.state.NYTBestsellers} />
          } />
          <Route path="/poetry" render={() =>
            <PoetryPage
              poem={this.state.poemOfDay}
              poemSearch={this.poemSearch}
              handlePoemSearch={this.handlePoemSearch}
              poemList={this.state.poetryDBpoems}
            />} />
          {/* sortedBooks defaults to cleanData unless triggered */}
          <Route path='/events' render={() =>
            <EventsPage
              events={this.state.bookEvents}
              searchForEvents={this.findAuthorEvents}
              handleEventSearch={this.handleEventSearch}
            />
          } />
          <Route path='/bookSearch' render={() =>
            <SearchArea
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
