import React from 'react';

export default function BestsellerList(props) {
  return (
    // figma research!
    <div>
      <div>
        <h4>#{props.currentRank} - {props.title}</h4>
        <h5>by: {props.author}</h5>
        <p>Current Rank: {props.currentRank}</p>
        <p>Weeks on List: {props.weeksOnList}</p>
        <p>Rank Last Week: {props.rankLastWeek}</p>
      </div>
    </div>
  );
}