import "./Footer.scss";

const columns = [
  {
    title: "Institucional",
    links: ["Sobre Nós", "Movimento", "Trabalhe conosco"],
  },
  {
    title: "Ajuda",
    links: ["Suporte", "Fale Conosco", "Perguntas Frequentes"],
  },
  {
    title: "Termos",
    links: ["Termos e Condições", "Política de Privacidade", "Troca e Devolução"],
  },
];

const socials = [
  { name: "Instagram", icon: "/instagram.svg", href: "#" },
  { name: "Facebook", icon: "/facebook.svg", href: "#" },
  { name: "LinkedIn", icon: "/linkedin.svg", href: "#" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <div className="footer__brand">
            <img src="/Logo.svg" alt="Econverse" className="footer__logo" />
            <p className="footer__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="footer__socials">
              {socials.map(({ name, icon, href }) => (
                <a key={name} href={href} aria-label={name}>
                  <img src={icon} alt={name} width={20} height={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer__columns">
            {columns.map((column) => (
              <div key={column.title} className="footer__column">
                <h3 className="footer__column-title">{column.title}</h3>
                <ul className="footer__links">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="footer__link">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </footer>
  );
}