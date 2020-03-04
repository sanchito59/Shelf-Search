// linter ignores this
/* global gapi */
import React, { setState, useState } from "react";
import "./App.css";
// Components
import Header from "./components/Header";
import Books from "./components/Books";

let CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
let API_KEY = process.env.REACT_APP_API_KEY;
console.log(process.env.REACT_APP_GOOGLE_API_KEY);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      name: "",
      email: "",
      url: "",
      access_token: "",
      bookshelf: []
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

  componentDidMount() {
    const successCallback = this.onSuccessfulAuth.bind(this);
    window.gapi.load("auth2", () => {
      this.auth2 = gapi.auth2.init({
        apiKey: `${API_KEY}`,
        client_id: `${CLIENT_ID}`,
        scope: "https://www.googleapis.com/auth/books"
      });

      this.auth2.then(() => {
        console.log("initialization");
        this.setState({
          isSignedIn: this.auth2.isSignedIn.get()
        });
      });
    });

    window.gapi.load("signin2", function() {
      var opts = {
        width: 200,
        height: 50,
        client_id: `${CLIENT_ID}`,
        onsuccess: successCallback
      };
      gapi.signin2.render("loginButton", opts);
    });
  }

  onSuccessfulAuth() {
    console.log("succesful login");
    console.log("this.auth2: ", this.auth2);
    this.setState({
      isSignedIn: true,
      err: null
    });
    var googleUser = this.auth2.currentUser.get().Qt.Ad;
    this.setState({
      googleUser: this.auth2.currentUser.get().Qt.Ad
    });

    var access_token = this.auth2.currentUser.get().uc.access_token;
    console.log("access_token: ", access_token);

    const request = async () => {
      const response = await fetch(
        // hardcoded userID 116706290539027713662; this fetch returns ALL bookshelves
        // `https://www.googleapis.com/books/v1/users/116706290539027713662/bookshelves?/volumes?key=${API_KEY}`

        // this fetch returns books from a specific bookshelf- TestBooks
        `https://www.googleapis.com/books/v1/users/116706290539027713662/bookshelves/1001/volumes?key=${API_KEY}`
      );
      const json = await response.json();
      let items = json;
      console.log("test response in onSuccessfulAuth()", items);
      this.setState({
        books: items
      });
    };
    request();
  }

  onLoginFailed(err) {
    this.setState({
      isSignedIn: false,
      error: err
    });
  }

  displayLoginStatus() {
    if (this.state.isSignedIn) {
      return <p>Hello {this.state.googleUser}, you are now signed in!</p>;
    } else {
      return (
        <div>
          <p>You are not signed in.</p>
          <button id="loginButton"></button>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.displayLoginStatus()}
        <br></br>
        <Books />
      </div>
    );
  }
}

export default App;
