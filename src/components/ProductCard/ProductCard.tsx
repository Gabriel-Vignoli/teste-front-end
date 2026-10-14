import "./ProductCard.scss";

export interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
  oldPrice?: number;
}

interface ProductCardProps {
  product: Product;
  onClick?: (product: Product) => void;
}

const INSTALLMENTS = 2;

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const { productName, descriptionShort, photo, price, oldPrice } = product;

  const handleClick = () => onClick?.(product);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick?.(product);
    }
  };

  return (
    <article
      className="product-card"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <div className="product-card__image-wrapper">
        <img src={photo} alt={productName} className="product-card__image" />
      </div>

      <h3 className="product-card__name">{descriptionShort}</h3>

      <div className="product-card__prices">
        {oldPrice && (
          <span className="product-card__old-price">
            {formatCurrency(oldPrice)}
          </span>
        )}
        <strong className="product-card__price">{formatCurrency(price)}</strong>
        <span className="product-card__installments">
          ou {INSTALLMENTS}x de {formatCurrency(price / INSTALLMENTS)} sem juros
        </span>
        <span className="product-card__shipping">Frete grátis</span>
      </div>

      <button type="button" className="product-card__button">
        Comprar
      </button>
    </article>
  );
}