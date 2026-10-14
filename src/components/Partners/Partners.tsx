import "./Partners.scss";
import parceirosImg from "/parceiros.png";

const partnersData = [
  {
    id: 1,
    title: "Parceiros",
    description: "Lorem ipsum dolor sit amet, consectetur",
  },
  {
    id: 2,
    title: "Parceiros",
    description: "Lorem ipsum dolor sit amet, consectetur",
  },
];

export default function Partners() {
  return (
    <section className="partners" aria-labelledby="partners-title">
      <div className="container">
        <div className="partners__grid">
          {partnersData.map((partner) => (
            <div
              key={partner.id}
              className="partners__card"
              style={{ backgroundImage: `url(${parceirosImg})` }}
            >
              <div className="partners__content">
                <h2 id="partners-title" className="partners__title">
                  {partner.title}
                </h2>
                <p className="partners__description">{partner.description}</p>
                <button type="button" className="partners__button">
                  Confira
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}