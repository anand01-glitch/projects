import { Link } from "react-router";

function Header() {
  return (
    <header className="site-header">
      <div className="brand-group">
        <Link to="/" className="brand-logo">
          NovaFlow
        </Link>
        <p className="brand-subtitle">Modern React product experience</p>
      </div>

      <nav className="site-nav" aria-label="Primary navigation">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/counter" className="nav-link">
          Counter
        </Link>
      </nav>

      <Link to="/counter" className="button button-primary">
        Try demo
      </Link>
    </header>
  );
}

export default Header;
