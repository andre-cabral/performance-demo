import './ContentImagePriority.css';

function ContentImagePriority({
  image,
  alt = '',
  title = '',
  text = '',
  index = 0
}) {
  return (
    <div className="content-image-priority">
      {
        index <= 1
          ?
            <>
              <img fetchpriority="high" src={image} className="content-image-priority__image" alt={alt} />
            </>
          : 
            <img fetchpriority="low" src={image} className="content-image-priority__image" alt={alt} />
      }

      <div className="content-image__content">
        <h2 className="content-image__title">{title}</h2>
        <p className="content-image__text">{text}</p>
      </div>
    </div>
  );
}

export {ContentImagePriority};
