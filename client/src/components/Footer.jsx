import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">ဂိမ်းထပ်ခဲ့ရန်</div>
        <p className="footer-tagline">ဂိမ်းကတ်များ လျင်မြန်စွာ ထပ်ခဲ့ပါ</p>
        <div className="footer-links">
          <button type="button" onClick={() => navigate('/about')}>ကျွန်ုပ်တို့အကြောင်း</button>
          <span className="footer-dot">•</span>
          <button type="button" onClick={() => navigate('/contact')}>ဆက်သွယ်ရန်</button>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Game Top-Up. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
