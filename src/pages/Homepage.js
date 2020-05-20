import React from 'react';
// Components
import NYTBestsellers from './components/NYTBestsellers';
import Bookshelf from './components/Bookshelf';
// Styles/Assets
// Trending
import crazyRichAsians from './../assets/bookCovers/crazyRichAsians.jpg'
import becoming from './../assets/bookCovers/becoming.jpg'
import philosopherStone from './../assets/bookCovers/philosopherStone.jpg'
import sparkOfLight from './../assets/bookCovers/sparkOfLight.jpg'
import verity from './../assets/bookCovers/verity.jpg'
// Classic Lit
import haveAndHaveNot from './../assets/bookCovers/haveAndHaveNot.jpg'
import wutheringHeights from './../assets/bookCovers/wutheringHeights.jpg'
import theStranger from './../assets/bookCovers/theStranger.jpg'
import prideAndPrejudice from './../assets/bookCovers/prideAndPrejudice.jpg'
import catcherInRye from './../assets/bookCovers/catcherInRye.jpg'
import orwell1984 from './../assets/bookCovers/orwell1984.jpg'
// Sci Fi
import dune from './../assets/bookCovers/dune.jpg'
import fahrenheit451 from './../assets/bookCovers/fahrenheit451.jpg'
import theMartian from './../assets/bookCovers/theMartian.jpg'
import nueromancer from './../assets/bookCovers/nueromancer.jpg'
import strangerInStrangeLand from './../assets/bookCovers/strangerInStrangeLand.jpg'
import foundationSeries from './../assets/bookCovers/foundationSeries.jpg'

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
      title: 'Becoming',
      author: 'Michelle Obama',
      publisher: 'Random House',
      ISBN: '0525633758',
      coverIMG: becoming,
      pages: '720 pages',
    },
    {
      title: 'Harry Potter and the Philosopher\'s Stone',
      author: 'J.K. Rowling',
      publisher: 'Arthur A. Levine Books',
      ISBN: '133829914X',
      coverIMG: philosopherStone,
      pages: '336 pages',
    },
    {
      title: 'A Spark of Light',
      author: 'Jodi Picoult',
      publisher: 'Ballantine Books',
      ISBN: 'B07B73H2BX',
      coverIMG: sparkOfLight,
      pages: '381 pages',
    },
    {
      title: 'Verity',
      author: 'Colleen Hoover',
      publisher: 'Self-Published',
      ISBN: '1791392792',
      coverIMG: verity,
      pages: '331 pages',
    },
  ]

const classicLiteratureList =
  [
    {
      title: 'To Have and Have Not',
      author: 'Ernest Hemingway',
      publisher: 'Charles Scribner\'s Sons',
      ISBN: '9780345803788',
      coverIMG: haveAndHaveNot,
      pages: '544 pages',
    },
    {
      title: 'Wuthering Heights',
      author: 'Emily Brontë',
      publisher: 'Anchor',
      ISBN: '9780345803788',
      coverIMG: wutheringHeights,
      pages: '544 pages',
    },
    {
      title: 'The Stranger',
      author: 'Albert Camus',
      publisher: 'Anchor',
      ISBN: '9780345803788',
      coverIMG: theStranger,
      pages: '544 pages',
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austin',
      publisher: 'Anchor',
      ISBN: '9780345803788',
      coverIMG: prideAndPrejudice,
      pages: '544 pages',
    },
    {
      title: 'The Catcher in The Rye',
      author: 'J.D. Salinger',
      publisher: 'Anchor',
      ISBN: '9780345803788',
      coverIMG: catcherInRye,
      pages: '544 pages',
    },
    {
      title: '1984',
      author: 'George Orwell',
      publisher: 'Anchor',
      ISBN: '9780345803788',
      coverIMG: orwell1984,
      pages: '544 pages',
    },
  ]

const sciFiList =
  [
    {
      title: 'Dune',
      author: 'Frank Herbert',
      publisher: 'Anchor',
      ISBN: '9780345803788',
      coverIMG: dune,
      pages: '544 pages',
    },
    {
      title: 'Fahrenheit 451',
      author: 'Ray Bradbury',
      publisher: 'Anchor',
      ISBN: '9780345803788',
      coverIMG: fahrenheit451,
      pages: '544 pages',
    },
    {
      title: 'The Martian',
      author: 'Andy Weir',
      publisher: 'Anchor',
      ISBN: '9780345803788',
      coverIMG: theMartian,
      pages: '544 pages',
    },
    {
      title: 'Nueromancer',
      author: 'William Gibson',
      publisher: 'Anchor',
      ISBN: '9780345803788',
      coverIMG: nueromancer,
      pages: '544 pages',
    },
    {
      title: 'Stranger In A Strange Land',
      author: 'Robert A. Heinlein',
      publisher: 'Anchor',
      ISBN: '9780345803788',
      coverIMG: strangerInStrangeLand,
      pages: '544 pages',
    },
    {
      title: 'Foundation Series (#1)',
      author: 'Isaac Asimov',
      publisher: 'Anchor',
      ISBN: '9780345803788',
      coverIMG: foundationSeries,
      pages: '544 pages',
    },
  ]

export default function Homepage(props) {
  const { bestSellers } = props;
  return (
    <div>
      <NYTBestsellers />
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
