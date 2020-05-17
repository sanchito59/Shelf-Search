import React from 'react';
import './../../App.scss';

export default function EventCard(props) {
  const { date, eventAddress, eventTitle, eventCity, eventState } = props;

  let newDate = date.slice(0, 10);
  let year = newDate.slice(0, 4);
  let monthDay = newDate.slice(5, 9);
  let managedDate = monthDay + '-' + year;
  const addressQuery = `https://www.google.com/search?q=` + eventAddress + " " + eventCity + ", " + eventState
  return (
    <div className='outerDiv'>
      <div className='eventTitleDiv'>
        <h2 className='eventTitle'> <i className="fas fa-bell"></i> {eventTitle}</h2>
      </div>
      <div className='innerDiv'>
        <h3><i class="fa fa-calendar" aria-hidden="true"></i>: {managedDate}</h3>
        <h3><i className="fas fa-map-marker-alt"></i> <a className='addressQueryStyle' href={addressQuery} target="_blank">{eventAddress}</a></h3>
        <h4>{eventCity}</h4>
        <h4>{eventState}</h4>
      </div>
    </div>
  );
}
