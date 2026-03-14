import { useState, useEffect } from 'react';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (fn) => {
    fn();
    setMobileOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <button className="navbar-brand" onClick={() => navigate('/')} type="button">
          <span className="navbar-logo-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
            </svg>
          </span>
          <span className="navbar-title">MyanTop</span>
        </button>

        <nav className="navbar-nav">
          <NavLink
            to="/about"
            className={({ isActive }) => `navbar-link ${isActive ? 'navbar-link--active' : ''}`}
          >
            ကျွန်ုပ်တို့အကြောင်း
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `navbar-link ${isActive ? 'navbar-link--active' : ''}`}
          >
            ဆက်သွယ်ရန်
          </NavLink>
        </nav>

        <button
          className="navbar-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span className={`navbar-toggle-bar ${mobileOpen ? 'navbar-toggle-bar--open' : ''}`} />
          <span className={`navbar-toggle-bar ${mobileOpen ? 'navbar-toggle-bar--open' : ''}`} />
          <span className={`navbar-toggle-bar ${mobileOpen ? 'navbar-toggle-bar--open' : ''}`} />
        </button>
      </div>

      <div
        className={`navbar-mobile ${mobileOpen ? 'navbar-mobile--open' : ''}`}
        aria-hidden={!mobileOpen}
      >
        <div className="navbar-mobile-backdrop" onClick={() => setMobileOpen(false)} />
        <div className="navbar-mobile-menu">
          <button
            type="button"
            className={`navbar-mobile-link ${location.pathname === '/about' ? 'navbar-mobile-link--active' : ''}`}
            onClick={() => handleNavClick(() => navigate('/about'))}
          >
            ကျွန်ုပ်တို့အကြောင်း
          </button>
          <button
            type="button"
            className={`navbar-mobile-link ${location.pathname === '/contact' ? 'navbar-mobile-link--active' : ''}`}
            onClick={() => handleNavClick(() => navigate('/contact'))}
          >
            ဆက်သွယ်ရန်
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
