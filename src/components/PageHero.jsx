import Navbar from './Navbar';
import './PageHero.css';

export default function PageHero({ title, bgImage }) {
  const imageStyle = bgImage
    ? {
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }
    : {};

  return (
    <div className="page-hero">
      <div
        className="page-hero__image"
        aria-hidden="true"
        style={imageStyle}
      />
      <Navbar transparent />
      <div className="page-hero__title container">
        <h1>{title}</h1>
      </div>
    </div>
  );
}