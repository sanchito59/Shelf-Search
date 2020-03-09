import React from 'react';

export default function EmbeddedBook(props) {
  return (
    <div>
      <iframe src={props.ebookURL + "?ui=embed"} width="480px" height="480px"></iframe>
    </div>
  );
}


{/* <iframe src="http://openlibrary.org/books/OL22861205M/The_story_of_the_world_history_for_the_classic_child.?ui=embed" width="480px" height="480px"></iframe> */ }