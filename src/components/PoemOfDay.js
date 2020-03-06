import React from 'react';
import './../PoemOfDay.css';

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
    <div className="poem-div">
      <h2 className="poem-title">a...synchronous</h2>
      <h4 className="poem-author">by code sinner</h4>
      <p className="poem-body">poem body <br></br>
        test section <br></br>
        goes here, <br></br>
        but lives in <br></br>
        console debug hell
      </p>
    </div>
  );
}