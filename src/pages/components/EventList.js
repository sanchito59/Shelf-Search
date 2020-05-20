import React from 'react';
import EventCard from './EventCard';
import ScrollUp from './ScrollUp';

export default function Event(props) {
  const { events } = props;
  console.log(events);

  return (
    <>
      <ScrollUp />
      <h1 className='event-list-title'>Events Near You!</h1>
      <>
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
      </>
    </>
  );
}
