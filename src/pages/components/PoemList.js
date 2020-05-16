import React from 'react';
import styled from 'styled-components';
// Components
import PoemOfTheDay from './PoemOfTheDay';
import TwitterContainer from './TwitterContainer';
import SinglePoemDisplay from './SinglePoemDisplay';

const FlexWrapper = styled.div`
  display: flex;
`;

export default function PoemList(props) {
  const { poemList } = props;
  // console.log('PoemList props: ', props);
  return (
    <div>
      {/* <FlexWrapper> */}
      <PoemOfTheDay />
      <TwitterContainer />
      {/* </FlexWrapper> */}
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
