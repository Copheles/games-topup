function PackageCard({ amount, price, unit, accent, index, onSelect }) {
  return (
    <div 
      className={`package-card package-card--${accent}`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="package-card-inner">
        <div className="package-amount">
          <span className="package-amount-value">{amount}</span>
          <span className="package-amount-unit">{unit}</span>
        </div>
        <div className="package-price">{price.toLocaleString()} KS</div>
        <button className={`package-buy package-buy--${accent}`} onClick={onSelect}>
          <span>ယခုဝယ်ပါ</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default PackageCard;
