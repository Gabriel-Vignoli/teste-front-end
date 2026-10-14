import "./Brands.scss";
import econverseLogo from "/Logo.svg";

const brands = [
  { id: 1, name: "Econverse", logo: econverseLogo },
  { id: 2, name: "Econverse", logo: econverseLogo },
  { id: 3, name: "Econverse", logo: econverseLogo },
  { id: 4, name: "Econverse", logo: econverseLogo },
  { id: 5, name: "Econverse", logo: econverseLogo },
];

export default function Brands() {
  return (
    <section className="brands" aria-labelledby="brands-title">
      <div className="container">
        <h2 id="brands-title" className="brands__title">
          Navegue por marcas
        </h2>

        <ul className="brands__list">
          {brands.map((brand) => (
            <li key={brand.id} className="brands__item">
              <button
                type="button"
                className="brands__circle"
                aria-label={brand.name}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="brands__logo"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}