import "./header.css";

const navLinks = ["Menu item 1", "Menu item 2", "Menu item 3"];

const Header = () => {
  return (
    <header>
      <div className="menu">
        <p className="home">My Cart</p>
        <nav>
          {navLinks.map((link, index) => (
            <a key={index} data-testid="link" href="#" className="link">
              {link}
            </a>
          ))}
        </nav>
      </div>
      <div className="search-bar">
        <input data-testid="inputSearch" placeholder="Product search" />
        <button data-testid="searchButton">Search</button>
      </div>
    </header>
  );
};

export default Header;
