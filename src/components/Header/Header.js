import logo from "../../images/logo.png";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        <span className="header__title__text">Rick and Morty Cards</span>
        <img
          className="header__title__image"
          src={logo}
          alt="Rick and Morty"
          title="Rick and Morty logo"
        />
      </h1>
    </header>
  );
};

export default Header;
