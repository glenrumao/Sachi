import './Frame.css';

/**
 * Editorial-style placeholder used everywhere a real product / lifestyle
 * photograph will eventually go. Swap the rendered <img> in for this once
 * the Django media library is wired up — every call site already expects
 * an `image` field to arrive on the product/content object.
 */
export default function Frame({ tone = 'warm', label, ratio = '4 / 5', className = '' }) {
  return (
    <div className={`frame frame--${tone} ${className}`} style={{ aspectRatio: ratio }}>
      <span className="frame__drape" aria-hidden="true" />
      {label && <span className="frame__label">{label}</span>}
    </div>
  );
}
