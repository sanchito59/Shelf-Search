import React, { useState } from 'react';
import './App.css';
import GoogleLogin from 'react-google-login';
// Components 
import Header from './components/Header';
import Books from './components/Books';

function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [url, setUrl] = useState('');


  const responseGoogle = (response) => {
    console.log(response)
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
  }

  return (
    <div className="App">
      <Header />
      <h1>Login with Google</h1>
      <h2> Welcome: {name}</h2>
      <h2> Email: {email}</h2>
      <img src={url} alt={name}></img>
      <br></br>
      <GoogleLogin
        clientId="UNIQUE_KEY_GOES_HERE.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
      <br></br>
      <br></br>
      <Books />
    </div>
  );
}

export default App;
