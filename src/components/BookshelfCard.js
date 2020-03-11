import React from 'react';
// Styles/Assets
import './../BookCardStyle.css'

export default function BookshelfCard(props) {
  console.log('bookshelf card: ', props)
  return (
    <div className="bookshelfCard">
      <img src={props.coverIMG} alt="book cover thumbnail" className='bookshelfIMG'></img>
      <h2>{props.title}</h2>
      <h4>Author: {props.author}</h4>
      <p>Publisher: {props.publisher}</p>
      <p>{props.pageCount}</p>
      <p>ISBN: {props.ISBN}</p>
    </div>
  );
}