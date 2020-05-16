import React from 'react';
// Styles/Assets
import './../../BookCardStyle.scss'

const BookshelfCard = (props) => {
  const { coverIMG, title, author, publisher, pageCount, ISBN } = props;
  // console.log('bookshelf card: ', props)
  return (
    <div className="bookshelfCard">
      <img src={coverIMG} alt="book cover thumbnail" className='bookshelfIMG'></img>
      <h2>{title}</h2>
      <h4>Author: {author}</h4>
      <p className='publisher'>Publisher: {publisher}</p>
      <p>{pageCount}</p>
      <p className='ISBN'>ISBN: {ISBN}</p>
    </div>
  );
}

export default BookshelfCard;
