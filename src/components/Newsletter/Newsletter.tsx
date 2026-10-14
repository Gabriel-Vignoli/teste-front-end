import { useState } from "react";
import "./Newsletter.scss";

export default function Newsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <section className="newsletter" aria-labelledby="newsletter-title">
      <div className="container">
        <div className="newsletter__inner">
          <div className="newsletter__text">
            <h2 id="newsletter-title" className="newsletter__title">
              Inscreva-se na nossa newsletter
            </h2>
            <p className="newsletter__description">
              Assine a nossa newsletter e receba as novidades e conteúdos
              exclusivos da Econverse.
            </p>
          </div>

          <form className="newsletter__form" onSubmit={handleSubmit}>
            <div className="newsletter__fields">
              <input
                type="text"
                className="newsletter__input"
                placeholder="Digite seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                className="newsletter__input"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="newsletter__button">
                Inscrever
              </button>
            </div>

            <label className="newsletter__checkbox">
              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                required
              />
              <span>Aceito os termos e condições</span>
            </label>
          </form>
        </div>
      </div>
    </section>
  );
}