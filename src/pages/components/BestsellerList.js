import React from 'react';
import './../../BestsellerList.css'

export default function BestsellerList(props) {
  return (
    <div className="mobile-padding">
      <div className="bestseller-card">
        <h4><span className="bestseller-rank">{props.currentRank}|</span>
          <a href={props.amazonLink} target='_blank'><span className="bestseller-title">{props.title}</span></a></h4>
        <h5>{props.author}</h5>
        <p className="bestseller-blurb">{props.description}</p>
        <p>Current Rank: {props.currentRank}</p>
        <p>Weeks on List: {props.weeksOnList}</p>
        <p>Rank Last Week: {props.rankLastWeek}</p>
        <a href={props.amazonLink} target='_blank' className="amazon-button"><i className="fab fa-amazon"></i> Buy</a>
        <hr></hr>
      </div>
    </div>
  );
}
