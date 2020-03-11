import React from 'react';
// Components
import EventCard from './EventCard';

export default function Event(props) {
  // console.log('event props: ', props)
  return (
    <div>
      <h1>Events Near You!</h1>
      <div>
        {
          props.events.map((event, i) => {
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