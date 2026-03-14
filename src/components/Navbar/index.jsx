import "./navbar.style.css";

export function Navbar({ links, menuAtivo, onNavegar }) {
  return (
    <>
      <nav className="navbar">
        <div className="navbar_inner">
          {links.map((link) => {
            return (
              <a
                href="#"
                key={link.id}
                className={menuAtivo == link.id ? "ativo" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  onNavegar(link.id);
                }}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
}
