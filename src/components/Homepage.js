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
    {
      title: 'Crazy Rich Asians',
      author: 'Kevin Kwan',
      publisher: 'Anchor',
      ISBN: '9780345803788',
      coverIMG: crazyRichAsians,
      pages: '544 pages',
    },
    {
      title: 'Crazy Rich Asians',
      author: 'Kevin Kwan',
      publisher: 'Anchor',
      ISBN: '9780345803788',
      coverIMG: crazyRichAsians,
      pages: '544 pages',
    },
    {
      title: 'Crazy Rich Asians',
      author: 'Kevin Kwan',
      publisher: 'Anchor',
      ISBN: '9780345803788',
      coverIMG: crazyRichAsians,
      pages: '544 pages',
    },
  ]

const classicLiteratureList =
  [
    {
      title: 'Crazy Rich Asians',
      author: 'Kevin Kwan',
      publisher: 'Anchor',
      ISBN: '9780345803788',
      coverIMG: crazyRichAsians,
      pages: '544 pages',
    },
    {
      title: 'Crazy Rich Asians',
      author: 'Kevin Kwan',
      publisher: 'Anchor',
      ISBN: '9780345803788',
      coverIMG: crazyRichAsians,
      pages: '544 pages',
    },
    {
      title: 'Crazy Rich Asians',
      author: 'Kevin Kwan',
      publisher: 'Anchor',
      ISBN: '9780345803788',
      coverIMG: crazyRichAsians,
      pages: '544 pages',
    },
    {
      title: 'Crazy Rich Asians',
      author: 'Kevin Kwan',
      publisher: 'Anchor',
      ISBN: '9780345803788',
      coverIMG: crazyRichAsians,
      pages: '544 pages',
    },
  ]

const sciFiList =
  [
    {
      title: 'Crazy Rich Asians',
      author: 'Kevin Kwan',
      publisher: 'Anchor',
      ISBN: '9780345803788',
      coverIMG: crazyRichAsians,
      pages: '544 pages',
    },
    {
      title: 'Crazy Rich Asians',
      author: 'Kevin Kwan',
      publisher: 'Anchor',
      ISBN: '9780345803788',
      coverIMG: crazyRichAsians,
      pages: '544 pages',
    },
    {
      title: 'Crazy Rich Asians',
      author: 'Kevin Kwan',
      publisher: 'Anchor',
      ISBN: '9780345803788',
      coverIMG: crazyRichAsians,
      pages: '544 pages',
    },
    {
      title: 'Crazy Rich Asians',
      author: 'Kevin Kwan',
      publisher: 'Anchor',
      ISBN: '9780345803788',
      coverIMG: crazyRichAsians,
      pages: '544 pages',
    },
  ]

export default function Homepage(props) {
  return (
    <div>
      <NYTBestsellers bestSellers={props.bestSellers} />
      <Bookshelf
        currentlyTrendingTitle={'Currently Trending'}
        trendingBooks={trendingBooksList}
        classicLitTitle={'Classic Literature'}
        classicLiterature={classicLiteratureList}
        sciFiTitle={'Sci-Fi Hits'}
        sciFi={sciFiList}
      />
    </div>
  );
}