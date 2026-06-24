import { useState } from "react";
import { Link } from "react-router";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="brand-group">
        <Link to="/" className="brand-logo">
          NovaFlow
        </Link>
        <p className="brand-subtitle">Modern React product experience</p>
      </div>

      <button
        type="button"
        className="mobile-nav-toggle"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setMenuOpen((current) => !current)}
      >
        <span aria-hidden="true">☰</span>
      </button>

      <nav className={`site-nav ${menuOpen ? "open" : ""}`} aria-label="Primary navigation">
        <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>
          About
        </Link>
        <Link to="/counter" className="nav-link" onClick={() => setMenuOpen(false)}>
          Counter
        </Link>
      </nav>

      <Link to="/counter" className="button button-primary nav-cta">
        Try demo
      </Link>
    </header>
  );
}

export default Header;
