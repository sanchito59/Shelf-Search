import React from 'react';
// Components
import EventCard from './EventCard';

export default function Event(props) {
  const { events } = props;
  // console.log('event props: ', props)
  const eventList = {}
  return (
    <div>
      <h1 className='event-list-title'>Events Near You!</h1>
      <div style={eventList}>
        {
          events.map((event, i) => {
            return <EventCard
              eventTitle={event.title}
              eventAddress={event.address}
              eventCity={event.city}
              eventState={event.state}
              date={event.date}
              URL={event.sourceURL}
              key={i}
            />
          })
        }
      </div>
    </div>
  );
}
