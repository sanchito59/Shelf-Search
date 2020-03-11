// Functionality
import React from 'react';
// Components
import Navlinks from './Navlinks.js';
// Styles/Assets
import './../App.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Quote of the Day
      quoteOfTheDay: '',
    }
  }

  quoteOfTheDay = () => {
    fetch('https://quotes.rest/qod?language=en', {
      method: 'get',
    }).then(response => {
      return response.json();
    }).then(json => {
      const qodResult = json.contents.quotes[0];
      this.setState({ quoteOfTheDay: qodResult })
    }).catch(error => {
      console.log('Quote of the Day Error: ', error);
    })
  }

  componentDidMount() {
    console.log(this.state)
    this.quoteOfTheDay();
  }

  render() {
    return (
      <header className="App-header" >
        <p className='quote-of-the-day'>{this.state.quoteOfTheDay.quote} <br></br> - {this.state.quoteOfTheDay.author}</p>
        <h1 className="shelf-search-title"><i className="fas fa-book"></i> Shelf Search</h1>
        <Navlinks />
      </header>
    )
  }
}

export default Header;