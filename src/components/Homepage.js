import React from 'react';
// Components
import NYTBestsellers from './NYTBestsellers';
import Bookshelf from './Bookshelf';
// Styles/Assets
import crazyRichAsians from './../assets/bookCovers/crazyRichAsians.jpg'
const trendingBooksList =
  [
    {
      title: 'Crazy Rich Asians',
      author: 'Kevin Kwan',
      publisher: 'Anchor',
      ISBN: '9780345803788',
      coverIMG: crazyRichAsians,
      pages: '544 pages',
    },
    //     {title: ,
    //     author: ,
    //   publisher: ,
    // ISBN: ,
    // coverIMG: ,},
    //     {title: ,
    //     author: ,
    //   publisher: ,
    // ISBN: ,
    // coverIMG: ,},
    //     {title: ,
    //     author: ,
    //   publisher: ,
    // ISBN: ,
    // coverIMG: ,},
    //   ]
    // const classicLiteratureList =
    //   [
    //     {title: ,
    //       author: ,
    //     publisher: ,
    //   ISBN: ,
    //   coverIMG: ,},{title: ,
    //     author: ,
    //   publisher: ,
    // ISBN: ,
    // coverIMG: ,},{title: ,
    //   author: ,
    // publisher: ,
    // ISBN: ,
    // coverIMG: ,},{title: ,
    //   author: ,
    // publisher: ,
    // ISBN: ,
    // coverIMG: ,},
    //   ]
    // const sciFiList =
    //   [{title: ,
    //     author: ,
    //   publisher: ,
    // ISBN: ,
    // coverIMG: ,},{title: ,
    //   author: ,
    // publisher: ,
    // ISBN: ,
    // coverIMG: ,},{title: ,
    //   author: ,
    // publisher: ,
    // ISBN: ,
    // coverIMG: ,},
    //     {title: ,
    //       author: ,
    //     publisher: ,
    //   ISBN: ,
    //   coverIMG: ,},
  ]

export default function Homepage(props) {
  return (
    <div>
      <NYTBestsellers bestSellers={props.bestSellers} />
      <Bookshelf
        title={'Currently Trending'}
        trendingBooks={trendingBooksList}
      />
      {/* <Bookshelf
        title={'Classic Literature'}
        classicLiterature={classicLiteratureList}
      />
      <Bookshelf
        title={'Sci-Fi'}
        sciFi={sciFiList}
      /> */}
    </div>
  );
}