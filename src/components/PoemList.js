import React from 'react';
// Components
import SinglePoemDisplay from './SinglePoemDisplay';

export default function PoemList(props) {
  // console.log('PoemList props: ', props);
  return (
    <div>
      {
        props.poemList.map((poem, i) => {
          return <SinglePoemDisplay
            title={poem.title}
            author={poem.author}
            poem={poem.lines}
            key={i}
          />
        })
      }
    </div>
  );
}