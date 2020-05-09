import React from 'react';
// Components
import PoemOfTheDay from './PoemOfTheDay';
import SinglePoemDisplay from './SinglePoemDisplay';

export default function PoemList(props) {
  const { poemList } = props;
  // console.log('PoemList props: ', props);
  return (
    <div>
      <PoemOfTheDay />
      {
        poemList.map((poem, i) => {
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
