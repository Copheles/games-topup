import { useState } from 'react';
import { GAME_CONFIG } from '../data/games';

function Checkout({ selected, onSuccess, onBack, onContact }) {
  const [userId, setUserId] = useState('');
  const [zoneId, setZoneId] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const config = GAME_CONFIG[selected?.game];
  const unit = config?.unit ?? '';
  const accent = config?.accent ?? 'ml';
  const gameImage = config?.image ?? '/images/mlbb.png';
  const gameName = config?.title ?? selected?.game;
  const needsZoneId = config?.checkoutFields?.includes('zoneId') ?? false;
  const deliveryInfo = config?.info?.delivery ?? 'အကောင့်သို့ ၅-၁၀ မိနစ်အတွင်း ပေးပို့မည်';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!userId.trim()) {
      setError('User ID လိုအပ်ပါသည်');
      return;
    }

    if (needsZoneId && !zoneId.trim()) {
      setError('ဇုန် ID လိုအပ်ပါသည်');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          game: selected.game,
          packageId: selected.id,
          userId: userId.trim(),
          zoneId: needsZoneId ? zoneId.trim() : undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'ဝယ်ယူခြင်းမအောင်မြင်ပါ');
        setLoading(false);
        return;
      }

      onSuccess({
        orderId: data.orderId,
        game: selected.game,
        packageId: selected.id,
        amount: selected.amount,
        unit,
        price: selected.price,
        userId: userId.trim(),
        zoneId: needsZoneId ? zoneId.trim() : null,
      });
    } catch (err) {
      setError('မကွန်နက်အမှားဖြစ်ပါသည်။ ထပ်ကြိုးစားပါ။');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <button className="checkout-back-btn" onClick={onBack}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          ပြန်သွားပါ
        </button>

        <div className="checkout-steps">
          <div className="checkout-step checkout-step--active">
            <span className="checkout-step-num">1</span>
            <span>အကောင့်အချက်အလက်</span>
          </div>
          <div className="checkout-step-line" />
          <div className="checkout-step checkout-step--next">
            <span className="checkout-step-num">2</span>
            <span>အတည်ပြုခြင်း</span>
          </div>
        </div>

        <div className="checkout-layout">
          <div className="checkout-main">
            <div className={`checkout-card checkout-card--${accent}`}>
              <h2 className="checkout-section-title">ဂိမ်းအကောင့်အချက်အလက်</h2>
              <form onSubmit={handleSubmit} className="checkout-form">
                <div className="form-group">
                  <label htmlFor="userId">User ID <span className="required">*</span></label>
                  <input
                    id="userId"
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="ဥပမာ: 123456789"
                    required
                  />
                </div>

                {needsZoneId && (
                  <div className="form-group">
                    <label htmlFor="zoneId">ဇုန် ID <span className="required">*</span></label>
                    <input
                      id="zoneId"
                      type="text"
                      value={zoneId}
                      onChange={(e) => setZoneId(e.target.value)}
                      placeholder="ဥပမာ: 1234"
                      required
                    />
                  </div>
                )}

                {error && <p className="form-error">{error}</p>}

                <div className="checkout-security-note">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <span>သင့်အချက်အလက်များ လုံခြုံစွာ ကာကွယ်ထားပါသည်</span>
                </div>

                <button type="submit" className={`checkout-submit-btn checkout-submit-btn--${accent}`} disabled={loading}>
                  {loading ? (
                    <>
                      <span className="btn-spinner" />
                      လုပ်ဆောင်နေပါသည်...
                    </>
                  ) : (
                    <>
                      <span>ဝယ်ယူခြင်းပြီးမြောက်ပါ</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          <aside className="checkout-sidebar">
            <div className="checkout-order-summary">
              <h3>အော်ဒါအကျဉ်းချုပ်</h3>
              <div className="checkout-order-item">
                <img src={gameImage} alt="" className="checkout-order-img" />
                <div className="checkout-order-details">
                  <p className="checkout-order-game">{gameName}</p>
                  <p className="checkout-order-pkg">{selected?.amount} {unit}</p>
                </div>
              </div>
              <div className="checkout-order-divider" />
              <div className="checkout-order-row">
                <span>စျေးနှုန်း</span>
                <span>{selected?.price?.toLocaleString()} KS</span>
              </div>
              <div className="checkout-order-row checkout-order-total">
                <span>စုစုပေါင်း</span>
                <span>{selected?.price?.toLocaleString()} KS</span>
              </div>
              <div className="checkout-delivery-info">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <span>{deliveryInfo}</span>
              </div>
            </div>

            <div className="checkout-help-card">
              <p className="checkout-help-title">အကူအညီလိုပါသလား?</p>
              <p className="checkout-help-text">ကျွန်ုပ်တို့၏ ဖောက်သည်ဝန်ဆောင်မှုအဖွဲ့သည် ၂၄ နာရီ ပံ့ပိုးပေးပါသည်။</p>
              <button type="button" className="checkout-help-link" onClick={onContact}>ဆက်သွယ်ရန် →</button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
