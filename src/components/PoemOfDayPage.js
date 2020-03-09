import React from 'react';
// Components
import PoemOfTheDay from './PoemOfTheDay'
// Styles/Assets
import './../PoemOfDay.css';

export default function PoemOfDay(props) {
  // async API call hasn't passed the data since before the component mounts?
  setTimeout(() => {
    // logging 3 times?
    if (typeof (props.poem.poem) === 'undefined') {
      console.log('need to mount?');
      // debugger;
    } else {
      console.log('poem of day title: ', props.poem.poem.title);
      console.log('poem of day author: ', props.poem.poem.author);
      console.log('poem of day poem: ', props.poem.poem.poem);
    }
  }, 1000)

  return (
    <div>
      <PoemOfTheDay poem={props.poem} />
    </div>
  );
}