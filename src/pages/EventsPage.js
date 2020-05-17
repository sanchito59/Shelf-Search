import React from 'react';
// Components
import EventSearch from './components/EventSearch';
import EventList from './components/EventList';

const GOOD_READS_KEY = `${process.env.REACT_APP_GOOD_READS_KEY}`

class EventsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      proxyurl: "https://cors-anywhere.herokuapp.com/",
      eventSearchField: '97204',
      bookEvents: [],
    }
    this.findAuthorEvents = this.findAuthorEvents.bind(this);
  }
  // const { eventSearch, handleEventSearch } = props;

  findAuthorEvents = () => {
    // e.preventDefault();
    const zip_input = this.state.eventSearchField;
    fetch(`${this.state.proxyurl}https://www.goodreads.com/event/index.xml?search[postal_code]=${zip_input}&key=${GOOD_READS_KEY}`, {
      method: 'get',
      header: 'no-cors',
    }).then(response => {
      return response.text();
    }).then(function (data) {
      let parser = new DOMParser();
      let xmlDoc = parser.parseFromString(data, 'text/html');
      let events = xmlDoc.getElementsByTagName('event');
      let eventsArray = [];
      for (let i = 0; i < events.length; i++) {
        let event = {};
        event.title = events[i].childNodes[5].innerText;
        event.address = events[i].childNodes[7].innerText;
        event.city = events[i].childNodes[9].innerText;
        event.state = events[i].childNodes[21].innerText;
        event.date = events[i].childNodes[15].innerText;
        event.access = events[i].childNodes[31].innerText;
        event.sourceURL = events[i].childNodes[35].innerText;
        eventsArray.push(event); // This doesn't contain all info, XML is inconsistent
      }
      console.log(eventsArray);
      return eventsArray;
    }).then(eventsArray => {
      this.setState({ bookEvents: eventsArray });
    }).catch(error => {
      console.log('author event error: ', error)
    })
  }

  handleEventSearch = e => {
    this.setState({ eventSearchField: e.target.value })
  }

  componentDidMount() {
    this.findAuthorEvents();
  }

  render() {
    return (
      <div>
        <EventSearch eventSearch={this.findAuthorEvents}
          handleEventSearch={this.handleEventSearch}
        />
        <EventList
          events={this.state.bookEvents}
        />
      </div>
    );
  }
}

export default EventsPage;
