function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="about-hero-bg" />
        <div className="about-hero-content">
          <span className="about-badge">ကျွန်ုပ်တို့အကြောင်း</span>
          <h1>MyanTop ဝန်ဆောင်မှု</h1>
          <p className="about-hero-desc">
            မြန်မာနိုင်ငံ၏ ယုံကြည်စိတ်ချရဆုံး ဂိမ်းကတ်ထပ်ခဲ့သည့် ဝန်ဆောင်မှုကို ပံ့ပိုးပေးနေပါသည်။
          </p>
        </div>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>ကျွန်ုပ်တို့၏ မျှော်မှန်းချက်</h2>
          <p>
            ဂိမ်းသမားများအတွက် လျင်မြန်ပြီး လုံခြုံသော ထပ်ခဲ့သည့်ဝန်ဆောင်မှုကို ပေးအပ်ရန်။
            ကျွန်ုပ်တို့သည် Mobile Legends၊ PUBG၊ Genshin Impact နှင့် အခြားဂိမ်းများအတွက်
            ယုံကြည်စိတ်ချရသော ဝန်ဆောင်မှုကို ပံ့ပိုးပေးပါသည်။
          </p>
        </section>

        <section className="about-section about-values">
          <h2>ကျွန်ုပ်တို့၏ တန်ဖိုးများ</h2>
          <div className="about-values-grid">
            <div className="about-value-card">
              <div className="about-value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>လုံခြုံမှု</h3>
              <p>သင့်အချက်အလက်များကို လုံခြုံစွာ ကာကွယ်ပါသည်</p>
            </div>
            <div className="about-value-card">
              <div className="about-value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3>လျင်မြန်မှု</h3>
              <p>၅ မိနစ်မှ ၃၀ မိနစ်အတွင်း ပေးပို့ပါသည်</p>
            </div>
            <div className="about-value-card">
              <div className="about-value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h3>၂၄ နာရီ ပံ့ပိုးမှု</h3>
              <p>ဖောက်သည်ဝန်ဆောင်မှု အဖွဲ့သည် အချိန်ပြည့် ပံ့ပိုးပေးပါသည်</p>
            </div>
          </div>
        </section>

        <section className="about-section about-stats">
          <div className="about-stats-grid">
            <div className="about-stat">
              <span className="about-stat-value">21+</span>
              <span className="about-stat-label">ဂိမ်းများ</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-value">50K+</span>
              <span className="about-stat-label">ကျေနပ်ဖောက်သည်များ</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-value">99%</span>
              <span className="about-stat-label">အောင်မြင်မှုနှုန်း</span>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>ဘာကြောင့် ကျွန်ုပ်တို့ကို ရွေးချယ်သင့်သလဲ</h2>
          <ul className="about-features-list">
            <li>အချိန်မှန်ကန်စွာ ပေးပို့ခြင်း</li>
            <li>ယုံကြည်စိတ်ချရသော ငွေပေးချေမှုစနစ်</li>
            <li>အကြောင်းအရာများစွာ ပံ့ပိုးခြင်း</li>
            <li>အသုံးပြုရလွယ်ကူသော ဝဘ်ဆိုက်</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
