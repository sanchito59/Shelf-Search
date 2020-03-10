import React from 'react';
// Components
import EventSearch from './EventSearch';
import EventList from './EventList';

export default function EventsPage(props) {
  console.log('events page props: ', props);
  return (
    <div>
      <EventSearch
        eventSearch={props.searchForEvents}
        handleEventSearch={props.handleEventSearch}
      />
      <EventList events={props.events} />
    </div>
  );
}