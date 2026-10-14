import "./Header.scss";

const benefits = [
  {
    icon: "/ShieldCheck.svg",
    before: "Compra ",
    highlight: "100% segura",
    after: "",
  },
  {
    icon: "/Truck.svg",
    before: "",
    highlight: "Frete grátis",
    after: " acima de R$ 200",
  },
  {
    icon: "/CreditCard.svg",
    before: "",
    highlight: "Parcele",
    after: " suas compras",
  },
];

const actions = [
  { icon: "/BoxWithArrow.svg", label: "Meus pedidos" },
  { icon: "/Heart.svg", label: "Favoritos" },
  { icon: "/UserCircle.svg", label: "Minha conta" },
  { icon: "/ShoppingCart.svg", label: "Carrinho" },
];

const navItems = [
  { label: "Todas categorias", href: "#" },
  { label: "Supermercado", href: "#" },
  { label: "Livros", href: "#" },
  { label: "Moda", href: "#" },
  { label: "Lançamentos", href: "#" },
  { label: "Ofertas do dia", href: "#", highlight: true },
  { label: "Assinatura", href: "#", icon: "/CrownSimple.svg" },
];

export default function Header() {
  return (
    <header className="header">
      <div className="header__benefits">
        <div className="container">
          <ul className="header__benefits-list">
            {benefits.map(({ icon, before, highlight, after }) => (
              <li key={highlight} className="header__benefit">
                <img src={icon} alt="" width={20} height={20} />
                <span>
                  {before}
                  <strong>{highlight}</strong>
                  {after}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="header__main-wrapper">
        <div className="header__main container">
          <a href="/" className="header__logo">
            <img src="/Logo.svg" alt="Econverse - página inicial" height={32} />
          </a>

          <form
            className="header__search"
            role="search"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="search" className="sr-only">
              O que você está buscando?
            </label>
            <input
              id="search"
              type="search"
              placeholder="O que você está buscando?"
            />
            <button type="submit" aria-label="Buscar">
              <img src="/MagnifyingGlass.svg" alt="" width={24} height={24} />
            </button>
          </form>

          <div className="header__actions">
            {actions.map(({ icon, label }) => (
              <button
                key={label}
                type="button"
                className="header__action"
                aria-label={label}
              >
                <img src={icon} alt="" width={28} height={28} />
              </button>
            ))}
          </div>
        </div>
      </div>

      <nav className="header__nav container" aria-label="Categorias">
        <ul className="header__nav-list">
          {navItems.map(({ label, href, highlight, icon }) => (
            <li key={label}>
              <a
                href={href}
                className={`header__nav-link${highlight ? " header__nav-link--highlight" : ""}`}
              >
                {icon && <img src={icon} alt="" width={20} height={20} />}
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}