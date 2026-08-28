import Frame from './Frame';
import './ThreeCardSection.css';

export default function ThreeCardSection({ cards }) {
  return (
    <section className="three-card container">
      <div className="three-card__grid">
        {cards.map((card) => (
          <article className="three-card__item" key={card.title}>
            <img src={card.img} alt="" className="three-card__image" />
            <h3>{card.title}</h3>
            <p>{card.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
