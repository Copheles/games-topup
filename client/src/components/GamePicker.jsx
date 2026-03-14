import { GAME_SECTIONS } from '../data/games';

function GamePicker({ onSelect }) {
  return (
    <div className="game-picker">
      <header className="picker-header">
        <span className="page-badge">ဂိမ်းရွေးချယ်ပါ</span>
        <h1 className="page-title">
          <span className="title-gradient">ဂိမ်းထပ်ခဲ့ရန်</span>
        </h1>
        <p className="page-subtitle">
          ဂိမ်းရွေးချယ်ပြီး ပက်ကေ့ချ်ကြည့်ပါ
        </p>
      </header>

      <div className="game-sections-list">
        {GAME_SECTIONS.map((section) => (
          <section key={section.id} className="game-section-block">
            <h2 className="section-title">{section.title}</h2>
            {section.games.length > 0 ? (
              <div className="game-cards">
                {section.games.map((game, i) => (
                  <button
                    key={game.id}
                    className={`game-card game-card--${game.accent}`}
                    onClick={() => onSelect(game)}
                    style={{ animationDelay: `${i * 0.08}s` }}
                  >
                    <div className={`game-card-glow game-card-glow--${game.accent}`} />
                    <div className="game-card-inner">
                      <div className="game-card-image-wrap">
                        <img src={game.image} alt={game.title} className="game-card-image" />
                      </div>
                      <div className="game-card-content">
                        <h2 className="game-card-title">
                          {game.title}
                          {game.subtitle && <span className="game-card-subtitle">{game.subtitle}</span>}
                        </h2>
                        <span className={`game-card-badge game-card-badge--${game.accent}`}>
                          {game.unit}
                        </span>
                        <p className="game-card-desc">{game.description}</p>
                        <span className="game-card-cta">
                          ပက်ကေ့ချ်ကြည့်ပါ
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <p className="section-empty">မကြာမီရောက်ရှိမည်</p>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}

export default GamePicker;
