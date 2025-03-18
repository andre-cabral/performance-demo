import './ContentImage.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function ContentImage({
  image,
  alt = '',
  lazy = false,
  lazyHtml = false,
  title = '',
  text = ''
}) {
  return (
    <div className="content-image">
      {
        lazy
          ?
          lazyHtml
            ?
              <img loading="lazy" src={image} className="content-image__image" alt={alt} />
            :
              <LazyLoadImage
                alt={alt}
                src={image}
                className="content-image__image"
              />
          :
          <img src={image} className="content-image__image" alt={alt} />
      }

      <div className="content-image__content">
        <h2 className="content-image__title">{title}</h2>
        <p className="content-image__text">{text}</p>
      </div>
    </div>
  );
}

export {ContentImage};
