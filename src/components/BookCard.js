import React from 'react';
import './../App.css';

const BookCard = (props) => {
  return (
    <div className="book-container">
      <img src={props.image} alt="book cover thumbnail"></img>
      <div className="desc-list">
        <h2>{props.title}</h2>
        <h3>Author: {props.author}</h3>
        <p>{props.publisher}</p>
        <p>Published Date: {props.publishedDate == '0000' ? 'Not available' : props.publishedDate.substring(0, 4)}</p>
      </div>
    </div>
  )
}

export default BookCard;