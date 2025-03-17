import './App.css';
import butterfly from './images/butterfly.jpg';
import cat from './images/cat.jpg';
import dog from './images/dog.jpg';
import globe from './images/globe.jpg';
import jellyfish from './images/jellyfish.jpg';
import {ContentImage}  from'../components/ContentImage';

function App() {
  return (
    <div className="app">
      <header className="app__header">
      </header>
      <div className="app__content">
        <ContentImage
          image={butterfly}
          alt="butterfly"
          title="Butterfly Image"
          text="Lorem ipsum dolor sit amet conspictetur adispicing amet."
        />
        <ContentImage
          image={cat}
          alt="cat"
          title="Cat Image"
          text="Lorem ipsum dolor sit amet conspictetur adispicing amet."
        />
        <ContentImage
          image={dog}
          alt="dog"
          title="Dog Image"
          text="Lorem ipsum dolor sit amet conspictetur adispicing amet."
        />
        <ContentImage
          image={globe}
          alt="globe"
          title="Globe Image"
          text="Lorem ipsum dolor sit amet conspictetur adispicing amet."
        />
        <ContentImage
          image={jellyfish}
          alt="jellyfish"
          title="Jellyfish Image"
          text="Lorem ipsum dolor sit amet conspictetur adispicing amet."
        />
      </div>
    </div>
  );
}

export default App;
