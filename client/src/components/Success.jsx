import { GAME_CONFIG } from '../data/games';

function Success({ order, onBack, onContact }) {
  const config = GAME_CONFIG[order?.game];
  const gameImage = config?.image ?? '/images/mlbb.png';
  const gameName = config?.title ?? order?.game;
  const needsZoneId = config?.checkoutFields?.includes('zoneId') ?? false;
  const deliveryInfo = config?.info?.delivery ?? 'အကောင့်သို့ ၅-၁၀ မိနစ်အတွင်း ပေးပို့မည်';

  return (
    <div className="success-page">
      <div className="success-container">
        <div className="success-header">
          <div className="success-icon-wrap">
            <svg className="success-checkmark" viewBox="0 0 52 52">
              <circle className="success-circle" cx="26" cy="26" r="24" fill="none" strokeWidth="2" />
              <path className="success-path" fill="none" strokeWidth="2" d="M14 26l8 8 16-16" />
            </svg>
          </div>
          <h1>ဝယ်ယူခြင်းအောင်မြင်ပါပြီ!</h1>
          <p className="success-subtitle">ကျေးဇူးတင်ပါသည်။ သင့်အော်ဒါကို လက်ခံရရှိပါပြီ။</p>
        </div>

        <div className="success-order-card">
          <div className="success-order-id">
            <span className="success-order-label">အော်ဒါနံပါတ်</span>
            <span className="success-order-value">{order?.orderId || 'ORD-' + Date.now()}</span>
            <button
              type="button"
              className="success-copy-btn"
              onClick={() => navigator.clipboard?.writeText(order?.orderId)}
              title="Copy"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            </button>
          </div>

          <div className="success-order-details">
            <div className="success-order-row">
              <img src={gameImage} alt="" className="success-order-img" />
              <div className="success-order-info">
                <p className="success-order-game">{gameName}</p>
                <p className="success-order-pkg">{order?.amount} {order?.unit}</p>
                <p className="success-order-price">{order?.price?.toLocaleString()} KS</p>
              </div>
            </div>
            <div className="success-order-divider" />
            <div className="success-order-meta">
              <div className="success-meta-row">
                <span>User ID</span>
                <span>{order?.userId}</span>
              </div>
              {needsZoneId && order?.zoneId && (
                <div className="success-meta-row">
                  <span>ဇုန် ID</span>
                  <span>{order.zoneId}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="success-next-steps">
          <h3>ဘာလုပ်ရမလဲ?</h3>
          <div className="success-steps-list">
            <div className="success-step-item">
              <span className="success-step-num">1</span>
              <p>သင့်ဂိမ်းအကောင့်ကို စစ်ဆေးပါ</p>
            </div>
            <div className="success-step-item">
              <span className="success-step-num">2</span>
              <p>{deliveryInfo}</p>
            </div>
            <div className="success-step-item">
              <span className="success-step-num">3</span>
              <p>ပြဿနာရှိပါက ကျွန်ုပ်တို့ကို ဆက်သွယ်ပါ</p>
            </div>
          </div>
        </div>

        <div className="success-actions">
          <button className="success-back-btn" onClick={onBack}>
            မူလစာမျက်နှာသို့ပြန်သွားပါ
          </button>
          <p className="success-support-text">
            မေးခွန်းများရှိပါက{' '}
            <button type="button" className="success-support-link" onClick={onContact}>
              ဆက်သွယ်ရန်
            </button>{' '}
            သို့ ဆက်သွယ်ပါ။
          </p>
        </div>
      </div>
    </div>
  );
}

export default Success;
