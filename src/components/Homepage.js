import React from 'react';
// Components
import NYTBestsellers from './NYTBestsellers';

export default function Homepage(props) {
  return (
    <div>
      <NYTBestsellers bestSellers={props.bestSellers} />
    </div>
  );
}