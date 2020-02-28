import React from 'react';
import './../App.css';

const BookCard = (props) => {
  console.log(props);

  return (
    <div className="book-container">
      <img src={props.image} alt="book cover thumbnail"></img>
      <div className="desc-list">
        <h2>{props.title}</h2>
        <h3>{props.author}</h3>
        <p>{props.publisher}</p>
        <p>{props.publishedDate}</p>
      </div>
    </div>
  )
}

export default BookCard;