import './OptimizedPriority.css';
import butterfly from './images/butterfly.webp';
import cat from './images/cat.webp';
import dog from './images/dog.webp';
import globe from './images/globe.webp';
import jellyfish from './images/jellyfish.webp';
import {ContentImagePriority}  from'../components/ContentImagePriority';
import {Header}  from'../components/Header';

function OptimizedPriority() {
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
    <div className="optimized-priority">
      <Header text="Header image optimization and piority." />
      <div className="optimized-priority__content">
        {
          imageList.map((item, index) => {
            return (
              <ContentImagePriority
                key={`app-image-${index}`}
                {...item}
                index={index}
              />
            );
          })
        }
      </div>
    </div>
  );
}

export default OptimizedPriority;
