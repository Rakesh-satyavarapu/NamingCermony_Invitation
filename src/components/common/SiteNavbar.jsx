
import { useState } from "react";
import { Menu, X } from "lucide-react";

function SiteNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["Baby Girl", "baby"],
    ["Muhurtham", "ceremony"],
    ["Events", "events"],
    ["Name Reveal", "reveal"],
    ["Gallery", "gallery"],
    ["RSVP", "rsvp"]
  ];

  const navigate = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });

    setMenuOpen(false);
  };

  return (
    <nav className="royal-navbar">
      <div className="navbar-inner">

        <a
          href="#top"
          className="navbar-brand"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            setMenuOpen(false);
          }}
        >
          Our Little Princess
        </a>

        <button
          className="navbar-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

        <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
          {links.map(([label, id]) => (
            <button key={id} onClick={() => navigate(id)}>
              {label}
            </button>
          ))}
        </div>

      </div>
    </nav>
  );
}

export default SiteNavbar;
