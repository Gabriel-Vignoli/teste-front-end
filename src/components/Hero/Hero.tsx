import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero" aria-label="Promoções">
      <div className="hero__content container">
        <h1 className="hero__title">
          Venha conhecer nossas
          <br />
          promoções
        </h1>

        <p className="hero__subtitle">
          <strong>50% Off</strong> nos produtos
        </p>

        <a href="#" className="hero__button">
          Ver produto
        </a>
      </div>
    </section>
  );
}