import logo from "../assets/logo.jpg";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar container">
        <div className="logo-container">
          <img src={logo} className="logo" alt="react eats logo" />
        </div>

        <ul className="nav-list">
          <li>
            <a href="#" className="nav-links">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-links">
              About
            </a>
          </li>
          <li>
            <a href="#" className="nav-links">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="nav-links">
              Cart
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
