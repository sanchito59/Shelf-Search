import React from 'react';
// Components
import SinglePoemDisplay from './SinglePoemDisplay';

export default function PoemList(props) {
  // console.log('PoemList props: ', props);
  if (props.poemList.length > -1) {
    return (
      <div>
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
  } else {
    return <p>Couldn't find anything, try searching again!</p>
  }
}