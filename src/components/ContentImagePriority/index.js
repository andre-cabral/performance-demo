import './ContentImagePriority.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function ContentImagePriority({
  image,
  alt = '',
  lazy = false,
  lazyHtml = false,
  title = '',
  text = '',
  index = 0
}) {
  return (
    <div className="content-image-priority">
      {
        lazy 
          ? 
          lazyHtml
            ?
              <img loading="lazy" fetchpriority={index <= 1 ? 'high' : 'low'} src={image} className="content-image-priority__image" alt={alt} />
            :
              <LazyLoadImage
                alt={alt}
                src={image}
                className="content-image-priority__image"
              />
          : 
          <img fetchpriority={index <= 1 ? 'high' : 'low'} src={image} className="content-image-priority__image" alt={alt} />
      }

      <div className="content-image__content">
        <h2 className="content-image__title">{title}</h2>
        <p className="content-image__text">{text}</p>
      </div>
    </div>
  );
}

export {ContentImagePriority};
