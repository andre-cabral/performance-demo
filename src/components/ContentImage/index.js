import './ContentImage.css';

function ContentImage({
  image,
  alt = '',
  title = '',
  text = ''
}) {
  return (
    <div className="content-image">
      <img src={image} className="content-image__image" alt={alt} />

      <div className="content-image__content">
        <h2 className="content-image__title">{title}</h2>
        <p className="content-image__text">{text}</p>
      </div>
    </div>
  );
}

export {ContentImage};
