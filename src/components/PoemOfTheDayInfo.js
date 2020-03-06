import React from 'react';
// Components
import PoemOfDay from './PoemOfDay';

export default function PoemOfTheDayInfo(props) {
  console.log(props);
  console.log(props.poem);
  return <PoemOfDay
    title={props.title}
    author={props.author}
    title={props.poem}
  />;
}