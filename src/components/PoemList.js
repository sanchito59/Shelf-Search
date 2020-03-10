import React from 'react';
// Components
import PoemOfTheDay from './PoemOfTheDay';
import SinglePoemDisplay from './SinglePoemDisplay';

export default function PoemList(props) {
  // console.log('PoemList props: ', props);
  return (
    <div>
      <PoemOfTheDay />
      {
        props.poemList.map((poem, i) => {
          console.log(poem.lines)
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