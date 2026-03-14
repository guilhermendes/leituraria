import { useState } from "react";
import "./navbar.style.css";

export function Navbar({ links, active, onNavigate, onAdd }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <div
          className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}
        >
          {links.map((link) => (
            <a
              key={link.id}
              href="#"
              className={`navbar__link ${active === link.id ? "navbar__link--active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(link.id);
                setMenuOpen(false);
              }}
            >
              {link.label}
            </a>
          ))}
          <button className="navbar__cta" onClick={onAdd}>
            + Adicionar Livro
          </button>
        </div>

        <button
          className={`navbar__burger ${menuOpen ? "navbar__burger--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
