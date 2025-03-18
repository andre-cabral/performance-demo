import './LazyloadHtml.css';
import butterfly from './images/butterfly.jpg';
import cat from './images/cat.jpg';
import dog from './images/dog.jpg';
import globe from './images/globe.jpg';
import jellyfish from './images/jellyfish.jpg';
import {ContentImage}  from'../components/ContentImage';
import {Header}  from'../components/Header';

function LazyloadHtml() {
  const imageList = [
    {
      image: butterfly,
      alt: 'butterfly',
      lazy: true,
      lazyHtml: true,
      title: 'Butterfly Image',
      text: 'Lorem ipsum dolor sit amet conspictetur adispicing amet.'
    },
    {
      image: cat,
      alt: 'cat',
      lazy: true,
      lazyHtml: true,
      title: 'Cat Image',
      text: 'Lorem ipsum dolor sit amet conspictetur adispicing amet.'
    },
    {
      image: dog,
      alt: 'dog',
      lazy: true,
      lazyHtml: true,
      title: 'Dog Image',
      text: 'Lorem ipsum dolor sit amet conspictetur adispicing amet.'
    },
    {
      image: globe,
      alt: 'globe',
      lazy: true,
      lazyHtml: true,
      title: 'Globe Image',
      text: 'Lorem ipsum dolor sit amet conspictetur adispicing amet.'
    },
    {
      image: jellyfish,
      alt: 'jellyfish',
      lazy: true,
      lazyHtml: true,
      title: 'Jellyfish Image',
      text: 'Lorem ipsum dolor sit amet conspictetur adispicing amet.'
    },
  ];

  return (
    <div className="lazy-html">
      <Header text="Header lazy load on img html with load=''." />
      <div className="lazy-html__content">
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

export default LazyloadHtml;
