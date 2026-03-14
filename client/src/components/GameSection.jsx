import PackageCard from './PackageCard';

function GameSection({ title, packages, unit, gameId, image, accent, onSelect }) {
  return (
    <section className={`game-section game-section--${accent}`} style={{ animationDelay: accent === 'pubg' ? '0.1s' : '0s' }}>
      <div className="game-section-inner">
        <div className="game-section-header">
          <div className="game-banner-wrap">
            <img src={image} alt={title} className="game-banner" />
            <div className={`game-banner-glow game-banner-glow--${accent}`} />
          </div>
          <div className="game-header-text">
            <h2 className="game-title">{title}</h2>
            <span className={`game-badge game-badge--${accent}`}>
              {unit}
            </span>
          </div>
        </div>
        <div className="package-grid">
          {packages.map((pkg, i) => (
            <PackageCard
              key={pkg.id}
              amount={pkg.amount}
              price={pkg.price}
              unit={unit}
              accent={accent}
              index={i}
              onSelect={() => onSelect({ game: gameId, ...pkg })}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default GameSection;
