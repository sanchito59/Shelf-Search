import React from 'react';
import './../../EventCard.css';

export default function EventCard(props) {
  // console.log('event card props: ', props)
  let date = props.date.slice(0, 10);
  let year = date.slice(0, 4);
  let monthDay = date.slice(5, 9);
  let managedDate = monthDay + '-' + year;
  const addressQuery = `https://www.google.com/search?q=` + props.eventAddress
  return (
    <div className='outerDiv'>
      <div className='eventTitleDiv'>
        <h2 className='eventTitle'> <i className="fas fa-bell"></i> {props.eventTitle}</h2>
      </div>
      <div className='innerDiv'>
        <h3><i class="fa fa-calendar" aria-hidden="true"></i>: {managedDate}</h3>
        <h3><i className="fas fa-map-marker-alt"></i> <a className='addressQueryStyle' href={addressQuery}>{props.eventAddress}</a></h3>
        <h4>{props.eventCity}</h4>
        <h4>{props.eventState}</h4>
      </div>
    </div>
  );
}
