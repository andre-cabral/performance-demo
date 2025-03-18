import './Optimized.css';
import butterfly from './images/butterfly.webp';
import cat from './images/cat.webp';
import dog from './images/dog.webp';
import globe from './images/globe.webp';
import jellyfish from './images/jellyfish.webp';
import {ContentImage}  from'../components/ContentImage';
import {Header}  from'../components/Header';

function Optimized() {
  const imageList = [
    {
      image: butterfly,
      alt: 'butterfly',
      lazy: false,
      title: 'Butterfly Image',
      text: 'Lorem ipsum dolor sit amet conspictetur adispicing amet.'
    },
    {
      image: cat,
      alt: 'cat',
      lazy: false,
      title: 'Cat Image',
      text: 'Lorem ipsum dolor sit amet conspictetur adispicing amet.'
    },
    {
      image: dog,
      alt: 'dog',
      lazy: false,
      title: 'Dog Image',
      text: 'Lorem ipsum dolor sit amet conspictetur adispicing amet.'
    },
    {
      image: globe,
      alt: 'globe',
      lazy: false,
      title: 'Globe Image',
      text: 'Lorem ipsum dolor sit amet conspictetur adispicing amet.'
    },
    {
      image: jellyfish,
      alt: 'jellyfish',
      lazy: false,
      title: 'Jellyfish Image',
      text: 'Lorem ipsum dolor sit amet conspictetur adispicing amet.'
    },
  ];
  return (
    <div className="optimized">
      <Header text="Header only with image optimization." />
      <div className="optimized__content">
        {
          imageList.map((item, index) => {
            return (
              <ContentImage
                key={`app-image-${index}`}
                {...item}
              />
            );
          })
        }
      </div>
    </div>
  );
}

export default Optimized;
