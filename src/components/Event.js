import React from 'react';

export default function Event(props) {
  // console.log('event props: ', props)
  let events = props.events;
  console.log(events);
  // let eventInfo = props.events[0];
  // console.log(eventInfo)
  return (
    <div>
      <h2>Event Title</h2>
      <h4>Event Author/Speaker</h4>
      <h5>Event Address</h5>
      <p>Event Description...</p>
    </div>
  );
}