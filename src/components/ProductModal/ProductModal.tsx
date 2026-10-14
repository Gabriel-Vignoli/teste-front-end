import { useEffect, useState } from "react";
import type { Product } from "../ProductCard/ProductCard";
import "./ProductModal.scss";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!product) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  if (!product) return null;

  const { productName, descriptionShort, photo, price } = product;

  const handleDecrease = () => setQuantity((q) => Math.max(1, q - 1));
  const handleIncrease = () => setQuantity((q) => q + 1);

  return (
    <div
      className="product-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      onClick={onClose}
    >
      <div
        className="product-modal__content"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="product-modal__close"
          aria-label="Fechar"
          onClick={onClose}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <line x1="3" y1="3" x2="13" y2="13" />
            <line x1="13" y1="3" x2="3" y2="13" />
          </svg>
        </button>

        <div className="product-modal__image-wrapper">
          <img
            src={photo}
            alt={productName}
            className="product-modal__image"
          />
        </div>

        <div className="product-modal__info">
          <h2 id="product-modal-title" className="product-modal__title">
            {productName}
          </h2>

          <strong className="product-modal__price">
            {formatCurrency(price)}
          </strong>

          <p className="product-modal__description">{descriptionShort}</p>

          <a href="#" className="product-modal__details-link">
            Veja mais detalhes do produto &gt;
          </a>

          <div className="product-modal__actions">
            <div className="product-modal__quantity">
              <button
                type="button"
                aria-label="Diminuir quantidade"
                onClick={handleDecrease}
              >
                −
              </button>
              <span>{String(quantity).padStart(2, "0")}</span>
              <button
                type="button"
                aria-label="Aumentar quantidade"
                onClick={handleIncrease}
              >
                +
              </button>
            </div>

            <button type="button" className="product-modal__buy">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}