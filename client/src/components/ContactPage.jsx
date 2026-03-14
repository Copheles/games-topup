import { useState } from 'react';

function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="contact-hero-bg" />
        <div className="contact-hero-content">
          <span className="contact-badge">ဆက်သွယ်ရန်</span>
          <h1>ကျွန်ုပ်တို့ကို ဆက်သွယ်ပါ</h1>
          <p>မေးခွန်းများ သို့မဟုတ် အကူအညီလိုအပ်ပါက ဆက်သွယ်ပါ။</p>
        </div>
      </div>

      <div className="contact-content">
        <div className="contact-layout">
          <div className="contact-info-cards">
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h3>အီးမေးလ်</h3>
              <p>support@gametopup.com</p>
              <p className="contact-info-note">၂၄ နာရီအတွင်း ပြန်ကြားပါမည်</p>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3>ဖုန်း</h3>
              <p>09760398142</p>
              <p className="contact-info-note">နေ့စဉ် ၉:၀၀ - ၂၁:၀၀</p>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3>လိပ်စာ</h3>
              <p>ရန်ကုန်မြို့၊ မြန်မာနိုင်ငံ</p>
              <p className="contact-info-note">အွန်လိုင်းဝန်ဆောင်မှုသာ ပံ့ပိုးပါသည်</p>
            </div>
          </div>

          <div className="contact-form-section">
            <div className="contact-form-card">
              <h2>မက်ဆေ့ချ်ပေးပါ</h2>
              <p className="contact-form-desc">အော်ဒါပြဿနာ သို့မဟုတ် မေးခွန်းများရှိပါက ဖြည့်သွင်းပါ။</p>

              {submitted ? (
                <div className="contact-success-msg">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <p>ကျေးဇူးတင်ပါသည်။ သင့်မက်ဆေ့ချ်ကို လက်ခံရရှိပါပြီ။ မကြာမီ ပြန်ကြားပါမည်။</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="contact-form-row">
                    <div className="contact-form-group">
                      <label htmlFor="contact-name">အမည်</label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="သင့်အမည်ထည့်ပါ"
                        required
                      />
                    </div>
                    <div className="contact-form-group">
                      <label htmlFor="contact-email">အီးမေးလ်</label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="contact-form-group">
                    <label htmlFor="contact-subject">ခေါင်းစဉ်</label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="ဥပမာ: အော်ဒါပြဿနာ"
                      required
                    />
                  </div>
                  <div className="contact-form-group">
                    <label htmlFor="contact-message">မက်ဆေ့ချ်</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="သင့်မေးခွန်း သို့မဟုတ် ပြဿနာကို ရေးပါ..."
                      rows="5"
                      required
                    />
                  </div>
                  <button type="submit" className="contact-submit-btn">
                    ပေးပို့ပါ
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
