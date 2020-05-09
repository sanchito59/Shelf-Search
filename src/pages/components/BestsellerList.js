import React from 'react';
import './../../BestsellerList.css'

export default function BestsellerList(props) {
  const { currentRank, amazonLink, title, author, description, weeksOnList, rankLastWeek } = props;

  return (
    <div className="mobile-padding">
      <div className="bestseller-card">
        <h4><span className="bestseller-rank">{currentRank}|</span>
          <a href={amazonLink} target='_blank'><span className="bestseller-title">{title}</span></a></h4>
        <h5>{author}</h5>
        <p className="bestseller-blurb">{description}</p>
        <p>Current Rank: {currentRank}</p>
        <p>Weeks on List: {weeksOnList}</p>
        <p>Rank Last Week: {rankLastWeek}</p>
        <a href={amazonLink} target='_blank' className="amazon-button"><i className="fab fa-amazon"></i> Buy</a>
        <hr></hr>
      </div>
    </div>
  );
}
