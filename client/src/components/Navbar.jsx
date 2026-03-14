import { useState, useEffect } from 'react';

function Navbar({ onHome, onAbout, onContact, currentView }) {
  const [mobileOpen, setMobileOpen] = useState(false);

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
        <button className="navbar-brand" onClick={onHome} type="button">
          <span className="navbar-logo-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
            </svg>
          </span>
          <span className="navbar-title">ဂိမ်းထပ်ခဲ့ရန်</span>
        </button>

        <nav className="navbar-nav">
          <button
            type="button"
            className={`navbar-link ${currentView === 'about' ? 'navbar-link--active' : ''}`}
            onClick={onAbout}
          >
            ကျွန်ုပ်တို့အကြောင်း
          </button>
          <button
            type="button"
            className={`navbar-link ${currentView === 'contact' ? 'navbar-link--active' : ''}`}
            onClick={onContact}
          >
            ဆက်သွယ်ရန်
          </button>
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
            className={`navbar-mobile-link ${currentView === 'about' ? 'navbar-mobile-link--active' : ''}`}
            onClick={() => handleNavClick(onAbout)}
          >
            ကျွန်ုပ်တို့အကြောင်း
          </button>
          <button
            type="button"
            className={`navbar-mobile-link ${currentView === 'contact' ? 'navbar-mobile-link--active' : ''}`}
            onClick={() => handleNavClick(onContact)}
          >
            ဆက်သွယ်ရန်
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
