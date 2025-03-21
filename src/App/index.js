import './App.css';
import butterfly from './images/butterfly.jpg';
import cat from './images/cat.jpg';
import dog from './images/dog.jpg';
import globe from './images/globe.jpg';
import jellyfish from './images/jellyfish.jpg';
import {ContentImage}  from'../components/ContentImage';
import {Header}  from'../components/Header';

function App() {
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
    <div className="app">
      <Header text="Header no optimization." />
      <div className="app__content">
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

export default App;
