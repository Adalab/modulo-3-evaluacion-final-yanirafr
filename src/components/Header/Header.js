import logo from "../../images/logo.png";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <img
        className="header__image"
        src={logo}
        alt="Rick and Morty"
        title="Rick and Morty logo"
      />
      <h1 className="header__title">Rick and Morty Cards</h1>
    </header>
  );
};

export default Header;
