import { useParams, useNavigate, Navigate } from 'react-router-dom';
import PackageCard from './PackageCard';
import { GAME_CONFIG } from '../data/games';
import { PACKAGES_BY_GAME } from '../data/packages';

function GamePackagesView() {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const packages = PACKAGES_BY_GAME[gameId];
  const config = GAME_CONFIG[gameId];
  if (!config || !packages) return <Navigate to="/" replace />;

  const info = config.info || {};
  const features = info.features || [];
  const delivery = info.delivery || '';
  const description = info.description || '';

  return (
    <div className="game-packages-view">
      <button className="packages-back-btn" onClick={() => navigate('/')}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        <span>ဂိမ်းများသို့ပြန်သွားပါ</span>
      </button>

      <div className={`packages-hero packages-hero--${config.accent}`}>
        <div className="packages-hero-bg" />
        <div className="packages-hero-inner">
          <div className="packages-hero-image-wrap">
            <img src={config.image} alt={config.title} className="packages-hero-image" />
            <div className={`packages-hero-glow packages-hero-glow--${config.accent}`} />
          </div>
          <div className="packages-hero-text">
            <h1 className="packages-hero-title">{config.title}</h1>
            <span className={`packages-hero-badge packages-hero-badge--${config.accent}`}>
              {config.unit}
            </span>
          </div>
        </div>
      </div>

      {(description || features.length > 0 || delivery) && (
        <div className="packages-info-card">
          {description && <p className="packages-info-desc">{description}</p>}
          {features.length > 0 && (
            <div className="packages-info-features">
              {features.map((f, i) => (
                <span key={i} className="packages-info-tag">{f}</span>
              ))}
            </div>
          )}
          {delivery && (
            <p className="packages-info-delivery">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              {delivery}
            </p>
          )}
        </div>
      )}

      <div className="packages-section-label">ပက်ကေ့ချ်ရွေးချယ်ပါ</div>
      <div className="packages-grid">
        {packages.map((pkg, i) => (
          <PackageCard
            key={pkg.id}
            amount={pkg.amount}
            price={pkg.price}
            unit={config.unit}
            accent={config.accent}
            index={i}
            onSelect={() => navigate(`/game/${gameId}/checkout/${pkg.id}`)}
          />
        ))}
      </div>
    </div>
  );
}

export default GamePackagesView;
