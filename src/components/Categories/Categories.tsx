import { useState } from "react";
import "./Categories.scss";

const categories = [
  { label: "Tecnologia", icon: "/image1.png" },
  { label: "Supermercado", icon: "/supermercados1.png" },
  { label: "Bebidas", icon: "/whiskey1.png" },
  { label: "Ferramentas", icon: "/ferramentas1.png" },
  { label: "Saúde", icon: "/cuidados-de-saude1.png" },
  { label: "Esportes e Fitness", icon: "/corrida1.png" },
  { label: "Moda", icon: "/moda1.png" },
];

export default function Categories() {
  const [active, setActive] = useState(categories[0].label);

  return (
    <section className="categories" aria-label="Categorias em destaque">
      <div className="container">
        <ul className="categories__list">
          {categories.map(({ label, icon }) => (
            <li key={label}>
              <button
                type="button"
                className={`categories__item${
                  active === label ? " categories__item--active" : ""
                }`}
                aria-pressed={active === label}
                onClick={() => setActive(label)}
              >
                <span className="categories__card">
                  <img
                    src={icon}
                    alt=""
                    className="categories__icon"
                    width={64}
                    height={64}
                  />
                </span>
                <span className="categories__label">{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}