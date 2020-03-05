import React from "react";
import request from "superagent";
import "./App.css";
// Components
import Header from "./components/Header";
import SearchArea from "./components/SearchArea";
import BookList from "./components/BookList";
import NYTBestsellers from './components/NYTBestsellers';
import PoemOfDay from './components/PoemOfDay';

const NYT_KEY = process.env.REACT_APP_NYT_KEY;
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
      books: [],
      searchField: "",
      sort: "",
      ebookCheck: "",
      // NYT API
      NYTBestsellers: [],
      bestsellerISBNs: [],
      bestSellerCoverLinks: [],
      // Poems One API
      poemOfDay: [],
    };
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
        // console.log('books: ', books)
        let book = json.results[0];
        // console.log('one book: ', book)
        let bestSellerData = [];
        for (let i = 0; i < 15; i++) {
          bestSellerData.push(books[i].isbns[0].isbn10);
        }
        // console.log(bestSellerData);
        // books.forEach(function () {
        // console.log(books.isbns)
        // })
        // let newBestSellerData;
        // this.bestSellerCovers(bestSellerData);
        this.setState({ NYTBestsellers: json.results });
        this.setState({ bestsellerISBNs: bestSellerData });
      })
      .catch(error => {
        console.log('Uh oh, ', error);
      });
  }

  // EATING UP API CALL LIMITS
  // bestSellerCovers = isbnArr => {
  //   for (let i = 0; i < 15; i++) {
  //     fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbnArr[i], {
  //       method: 'get'
  //     })
  //       .then(response => { return response.json(); })
  //       .then(data => {
  //         console.log(data)
  //         let bookCoverLinks = [];
  //         for (let i = 0; i < 15; i++) {
  //           bookCoverLinks.push(data.items[i].volumeInfo.imageLinks.thumbnail);
  //         }
  //         console.log('bookCoverLinks: ', bookCoverLinks);
  //         this.setState({ bestSellerCoverLinks: bookCoverLinks })
  //         // var img = data.items[0].volumeInfo.imageLinks.thumbnail;
  //         // img = img.replace(/^http:\/\//i, 'https://');
  //         // $('#cover-' + id).attr('src', img);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //         console.log('Googel API Error: Defaulting to archival images for book #' + ' ISBN: ' + isbnArr[i]);
  //         // var index = id - 1;
  //         // var img = archivedImages[index];
  //         // $('#cover-' + id).attr('src', img);
  //       });
  //   }
  // };

  getPoemOfTheDay = () => {
    fetch('https://api.poems.one/pod', {
      method: 'get',
    }).then(response => {
      return response.json();
    }).then(json => {
      const singlePoem = json.contents.poems[0];
      console.log(singlePoem.poem.title)
      console.log(singlePoem.poem.author)
      console.log(singlePoem.poem.poem)
      this.setState({ poemOfDay: singlePoem })
      console.log(this.state)
    }).catch(error => {
      console.log('Uh oh, ', error);
    })
  }

  componentDidMount() {
    this.getBestsellersNYT();
    this.getPoemOfTheDay();
  }

  searchBook = e => {
    console.log(this);
    e.preventDefault();
    if (this.state.ebookFilter === 'ebook-param') {
      console.log('ebookfilter api state: ', this.state)
      request
        // branch for different request
        // &download=epub
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
            // able to pass cleanData into books instead of the spread of 'data.body.items' because it is a managed response in a mapped format
            this.setState({ books: cleanData });
          } else {
            // need user notification here
            console.log("can't find that!");
          }
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
            this.setState({ books: cleanData });
            console.log('api state:', this.state)
          } else {
            console.log("can't find that!");
          }
        });
    }
  };

  handleSearch = e => {
    this.setState({ searchField: e.target.value });
  };

  handleSort = e => {
    this.setState({ sort: e.target.value });
  };

  handleEbookFilter = e => {
    this.setState({ ebookCheck: e.target.value });
    console.log(e.target.value)
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
    // new, managed response from mapping
    return cleanData;
  };
  render() {
    const sortedBooks = this.state.books.sort((a, b) => {
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
      return this.state.books;
    });
    return (
      <div className="App">
        <Header />
        <br></br>
        <PoemOfDay poem={this.state.poemOfDay} />
        <SearchArea
          handleSearch={this.handleSearch}
          handleSort={this.handleSort}
          handleEbookFilter={this.handleEbookFilter}
          searchBook={this.searchBook}
        />
        {/* sortedBooks defaults to the cleanData unless triggered */}
        <NYTBestsellers bestSellers={this.state.NYTBestsellers} />
        <BookList books={sortedBooks} />
      </div>
    );
  }
}

export default App;
