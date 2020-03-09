import React from 'react';
// Components
import SinglePoemDisplay from './SinglePoemDisplay';

export default function PoemList(props) {
  console.log('PoemList props: ', props);
  return (
    <div>
      <SinglePoemDisplay />
    </div>
  );
}