import React from 'react';
import styled from 'styled-components';

const OuterContainer = styled.div`
  text-align: left;
  margin: 0 auto;
  border: 2px solid black;
  border-radius: 8px;
  width: 65%;
  margin-bottom: 24px;
`;

const EventTitleContainer = styled.div`
  background-color: #daf5ff;
  padding: 5px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom: 2px solid black;
`;

const EventTitle = styled.h2`
  font-size: 20px;
  padding-left: 15px;
  color: #00445e;
  line-height: 2.5;
  margin-bottom: 0;
`;

const InnerContainer = styled.div`
  text-align: left;
  background-color: #f4fcff;
  padding: 20px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const AddressLink = styled.a`
  color: #00445e;
  text-decoration: none;
  
  &:hover {
  color: black;
  text-decoration: underline;
  }
`;

const EventCard = (props) => {
  const { date, eventAddress, eventTitle, eventCity, eventState } = props;

  let newDate = date.slice(0, 10);
  let year = newDate.slice(0, 4);
  let monthDay = newDate.slice(5, 10);
  let managedDate = monthDay + '-' + year;

  const addressQuery = `https://www.google.com/search?q=` + eventAddress + " " + eventCity + ", " + eventState
  return (
    <OuterContainer>
      <EventTitleContainer>
        <EventTitle> <i className="fas fa-bell"></i> {eventTitle}</EventTitle>
      </EventTitleContainer>
      <InnerContainer>
        <h3><i class="fa fa-calendar" aria-hidden="true"></i>: {managedDate}</h3>
        <h3><i className="fas fa-map-marker-alt"></i> <AddressLink href={addressQuery} target="_blank">{eventAddress}</AddressLink></h3>
        <h4>{eventCity}</h4>
        <h4>{eventState}</h4>
      </InnerContainer>
    </OuterContainer>
  );
}

export default EventCard;
