import React from 'react';
// Components
import EventSearch from './components/EventSearch';
import EventList from './components/EventList';

export default function EventsPage(props) {
  const { searchForEvents, handleEventSearch, events } = props;
  // console.log('events page props: ', props);
  return (
    <div>
      <EventSearch
        eventSearch={searchForEvents}
        handleEventSearch={handleEventSearch}
      />
      <EventList
        events={events}
      />
    </div>
  );
}
