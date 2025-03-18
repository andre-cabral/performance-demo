import './Lazyload.css';
import butterfly from './images/butterfly.jpg';
import cat from './images/cat.jpg';
import dog from './images/dog.jpg';
import globe from './images/globe.jpg';
import jellyfish from './images/jellyfish.jpg';
import {ContentImage}  from'../components/ContentImage';
import {Header}  from'../components/Header';

function Lazyload() {
  const imageList = [
    {
      image: butterfly,
      alt: 'butterfly',
      lazy: true,
      title: 'Butterfly Image',
      text: 'Lorem ipsum dolor sit amet conspictetur adispicing amet.'
    },
    {
      image: cat,
      alt: 'cat',
      lazy: true,
      title: 'Cat Image',
      text: 'Lorem ipsum dolor sit amet conspictetur adispicing amet.'
    },
    {
      image: dog,
      alt: 'dog',
      lazy: true,
      title: 'Dog Image',
      text: 'Lorem ipsum dolor sit amet conspictetur adispicing amet.'
    },
    {
      image: globe,
      alt: 'globe',
      lazy: true,
      title: 'Globe Image',
      text: 'Lorem ipsum dolor sit amet conspictetur adispicing amet.'
    },
    {
      image: jellyfish,
      alt: 'jellyfish',
      lazy: true,
      title: 'Jellyfish Image',
      text: 'Lorem ipsum dolor sit amet conspictetur adispicing amet.'
    },
  ];

  return (
    <div className="lazy">
      <Header text="Header lazy load on img with plugin." />
      <div className="lazy__content">
        {
          imageList.map((item, index) => {
            return (
              <ContentImage
                key={`lazy-image-${index}`}
                {...item}
              />
            );
          })
        }
      </div>
    </div>
  );
}

export default Lazyload;
