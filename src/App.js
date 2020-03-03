import React, { setState, useState } from "react";
import "./App.css";
import { GoogleLogin } from "react-google-login";
import $ from "jquery";
// Components
import Header from "./components/Header";
import Books from "./components/Books";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      name: "",
      email: "",
      url: ""
    };
  }

  responseGoogle = response => {
    console.log("responseGoogle", response);
    this.setState({ name: response.profileObj.name });
    this.setState({ email: response.profileObj.email });
    this.setState({ url: response.profileObj.imageUrl });
  };

  // const oauthSignIn = response => {
  //   console.log("Oauth response: ", response);
  //   // Google's OAuth 2.0 endpoint for requesting an access token
  //   var oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";

  //   // Create <form> element to submit parameters to OAuth 2.0 endpoint.
  //   var form = document.createElement("form");
  //   form.setAttribute("method", "GET"); // Send as a GET request.
  //   form.setAttribute("action", oauth2Endpoint);

  //   // Parameters to pass to OAuth 2.0 endpoint.
  //   var params = {
  //     client_id:
  //       "1051802642054-ismpitdrga2d886kl77h7rr60i579uud.apps.googleusercontent.com",
  //     redirect_uri: "http://localhost:3000",
  //     response_type: "token",
  //     scope: "https://www.googleapis.com/auth/drive.metadata.readonly",
  //     include_granted_scopes: "true",
  //     state: "pass-through value"
  //   };

  //   // Add form parameters as hidden input values.
  //   for (var p in params) {
  //     var input = document.createElement("input");
  //     input.setAttribute("type", "hidden");
  //     input.setAttribute("name", p);
  //     input.setAttribute("value", params[p]);
  //     form.appendChild(input);
  //   }

  //   // Add form to page and submit it to open the OAuth 2.0 endpoint.
  //   document.body.appendChild(form);
  //   form.submit();
  // };

  // const googleApiCall = response => {
  //   console.log("googleApiCall response data: ", response);
  //   var uriHash = window.location.hash; //holds the access token
  //   console.log(uriHash);
  //   var access_token = uriHash;
  //   console.log("access_token: ", access_token);
  //   var apiURL = `https://www.googleapis.com/books/v1/mylibrary/bookshelves`;
  //   $.ajax({
  //     url: apiURL,
  //     headers: {
  //       Authorization: "Bearer " + access_token
  //     },
  //     success: function(response) {
  //       console.log("success: ", response);
  //     },
  //     error: function(error) {
  //       console.log("failure: ", error);
  //     }
  //   });
  // };
  render() {
    return (
      <div className="App">
        <Header />
        <h1>Login with Google</h1>
        <h2> Welcome: {this.state.name}</h2>
        <h2> Email: {this.state.email}</h2>
        <img src={this.state.url} alt={this.state.name}></img>
        <br></br>
        <button>googleApiCall()</button>
        <GoogleLogin
          clientId="1051802642054-ismpitdrga2d886kl77h7rr60i579uud.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
        <br></br>
        <br></br>
        <Books />
      </div>
    );
  }
}

export default App;
