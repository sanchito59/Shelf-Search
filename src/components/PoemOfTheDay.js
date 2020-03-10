import React from 'react';
import Speech from 'react-speech';

export default function PoemOfTheDay(props) {
  const samplePoems = [
    {
      title: 'Alone Looking at the Mountain',
      author: 'Li Po',
      lines:
        ['All the birds have flown up and gone;',
          'A lonely cloud floats leisurely by.',
          'We never tire of looking at each other -',
          'Only the mountain and I.']
    },
    {
      title: 'In A Dark Time',
      author: 'Theodore Roethke',
      lines:
        ['In a dark time, the eye begins to see,',
          'I meet my shadow in the deepening shade; ',
          'I hear my echo in the echoing wood—',
          'A lord of nature weeping to a tree.',
          'I live between the heron and the wren,',
          'Beasts of the hill and serpents of the den.',

          'What’s madness but nobility of soul',
          'At odds with circumstance? The day’s on fire!',
          'I know the purity of pure despair,',
          'My shadow pinned against a sweating wall.',
          'That place among the rocks—is it a cave,',
          'Or winding path ? The edge is what I have.',

          'A steady storm of correspondences!',
          'A night flowing with birds, a ragged moon,',
          'And in broad day the midnight come again!',
          'A man goes far to find out what he is—',
          'Death of the self in a long, tearless night,',
          'All natural shapes blazing unnatural light.',

          'Dark, dark my light, and darker my desire.',
          'My soul, like some heat - maddened summer fly,',
          'Keeps buzzing at the sill.Which I is I?',
          'A fallen man, I climb out of my fear.',
          'The mind enters itself, and God the mind,',
          'And one is One, free in the tearing wind.']
    },
    {
      title: 'In a Station of the Metro',
      author: 'Ezra Pound',
      lines:
        ['The apparation of these faces in the crowd:', 'Petals on a wet, black bough.']
    },
    {
      title: 'A Strange New Cottage in Berkeley',
      author: 'Allen Ginsberg',
      lines:
        ['All afternoon cutting bramble blackberries off a tottering brown',
          'fence',
          'under a low branch with its rotten old apricots miscellaneous under',
          'the leaves,',
          'fixing the drip in the intricate gut machinery of a new toilet;',
          'found a good coffeepot in the vines by the porch, rolled a big tire out',
          'of the scarlet bushes, hid my marijuana;',
          'wet the flowers, playing the sunlit water each to each, returning for ',
          'godly extra drops for the stringbeans and daisies;',
          'three times walked round the grass and sighed absently:',
          'my reward, when the garden fed me its plums from the form of a',
          'small tree in the corner,',
          'an angel thoughtful of my stomach, and my dry and lovelorn tongue.']
    },
    {
      title: 'Finding Something',
      author: 'Jack Gilbert',
      lines: ['I say moon is horses in the tempered dark,',
        'because horse is the closest I can get to it.',
        'I sit on the terrace of this worn villa the king’s',
        'telegrapher built on the mountain that looks down',
        'on a blue sea and the small white ferry',
        'that crosses slowly to the next island each noon.',
        'Michiko is dying in the house behind me,',
        'the long windows open so I can hear',
        'the faint sound she will make when she wants',
        'watermelon to suck on or so I can take her',
        'to a bucket in the corner of the high-ceilinged room',
        'which is the best we can do for a chamber pot.',
        'She will lean against my leg as she sits',
        'so as not to fall over in her weakness.',
        'How strange and fine to get so near to it.',
        'The arches of her feet are like voices',
        'of children calling in the grove of lemon trees,',
        'where my heart is as helpless as crushed birds.']
    },
    // {},
    // {},
    // {},
  ]
  // Style
  const poemDiv = {
    textAlign: 'left',
    marginLeft: '30px',
    marginBottom: '30px'
  }
  const listStyle = {
    listStyle: 'none',
  }

  const poemAuthor = {
    textTransform: 'uppercase',
    textDecoration: 'underline',
    letterSpacing: '1px'
  }

  const poemBody = {
    fontFamily: 'Caladea, sans-serif',
  }

  // Speech
  const textstyle = {
    play: {
      hover: {
        backgroundColor: 'black',
        color: 'white'
      },
      button: {
        padding: '4',
        fontFamily: 'Helvetica',
        fontSize: '1.0em',
        cursor: 'pointer',
        pointerEvents: 'none',
        outline: 'none',
        backgroundColor: 'inherit',
        border: 'none'
      },
    }
  }
  const poemOfTheDayIndex = Math.floor(Math.random() * 5);
  return (
    <div>
      <div style={poemDiv}>
        <h1>Poem of the Day</h1>
        <h2>{samplePoems[4].title}</h2>
        <h4>BY <span style={poemAuthor}>{samplePoems[4].author}</span></h4>
        <div style={poemBody}>
          <Speech
            // How to style... 
            stop={true}
            textAsButton={true}
            rate="0.7" // Not perfect, cadence is too quick
            displayText='Listen'
            style={textstyle}
            text={samplePoems[4].lines.join('') // Works but not the best solution?
            }
          />
          {/* This doesn't really work */}
          {document.getElementsByClassName('rs-stop').innerHTML = 'Stop'}
          {
            samplePoems[4].lines.map((line, i) => {
              // console.log(i, ': ', line)
              return <li style={listStyle}>{line}</li>
            })
          }
        </div>
      </div>
    </div>
  );
}