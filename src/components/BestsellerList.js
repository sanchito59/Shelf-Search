import React from 'react';
import './../BestsellerList.css'

export default function BestsellerList(props) {
  return (
    <div>
      <div className="bestseller-card">
        <h4>#{props.currentRank} - {props.title}</h4>
        <h5>{props.author}</h5>
        <p>Current Rank: {props.currentRank}</p>
        <p>Weeks on List: {props.weeksOnList}</p>
        <p>Rank Last Week: {props.rankLastWeek}</p>
      </div>
    </div>
  );
}