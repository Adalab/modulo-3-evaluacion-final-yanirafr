import logo from "../../images/logo.png";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        <span className="header__title__text">Rick and Morty</span>
        <div className="header__title__subtitle">Cards</div>
        <img
          className="header__title__image"
          src={logo}
          alt="Rick and Morty Cards"
          title="Rick and Morty Cards"
        />
      </h1>
    </header>
  );
};

export default Header;
