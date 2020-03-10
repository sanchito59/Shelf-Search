import React from 'react';
// Components
import EventSearch from './EventSearch';
import Event from './Event';

export default function EventsPage(props) {
  console.log('events page props: ', props);
  return (
    <div>
      <EventSearch
        eventSearch={props.searchForEvents}
        handleEventSearch={props.handleEventSearch}
      />
      <Event events={props.events} />
    </div>
  );
}