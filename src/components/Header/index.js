import './Header.css';

function Header({text='Header'}) {
  return (
    <header className="header">
      <h1 className="header__title">
        {text}
      </h1>
    </header>
  );
}

export {Header};
