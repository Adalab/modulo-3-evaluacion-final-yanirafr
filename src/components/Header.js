import logo from "../images/logo.png";

const Header = (props) => {
  return (
    <header className="header">
      <img className="header__image" src={logo} alt="Rick and Morty" />
      <h1 className="header__title">Rick and Morty</h1>
    </header>
  );
};

export default Header;
