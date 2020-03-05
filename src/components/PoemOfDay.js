import React from 'react';

export default function PoemOfDay(props) {
  setTimeout(() => {
    if (typeof (props.poem.poem) === 'undefined') {
      // logging 3 times?
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
      <h2>debug hell</h2>
      <h4>by code sinner</h4>
      <p>poem body <br></br>
        test section <br></br>
        goes here, <br></br>
        but lives in <br></br>
        console debug hell
      </p>
    </div>
  );
}