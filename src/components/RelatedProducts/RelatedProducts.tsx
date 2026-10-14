import { useEffect, useState } from "react";
import ProductCard, { type Product } from "../ProductCard/ProductCard";
import ProductModal from "../ProductModal/ProductModal";
import "./RelatedProducts.scss";

const API_URL =
  "/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json";

const VISIBLE_CARDS = 4;

const tabs = [
  { label: "Celular", value: "celular" },
  { label: "Acessórios", value: "acessorios" },
  { label: "Tablets", value: "tablets" },
  { label: "Notebooks", value: "notebooks" },
  { label: "TVs", value: "tvs" },
  { label: "Ver todos", value: "todos" },
];

interface ProductsResponse {
  success: boolean;
  products: Product[];
}

interface RelatedProductsProps {
  variant?: "tabs" | "see-all";
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {direction === "left" ? (
        <polyline points="10 3 5 8 10 13" />
      ) : (
        <polyline points="6 3 11 8 6 13" />
      )}
    </svg>
  );
}

export default function RelatedProducts({
  variant = "tabs",
}: RelatedProductsProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );
  const [activeTab, setActiveTab] = useState(tabs[0].value);
  const [index, setIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadProducts() {
      try {
        const response = await fetch(API_URL, { signal: controller.signal });

        if (!response.ok) {
          throw new Error(`Erro ${response.status}`);
        }

        const data: ProductsResponse = await response.json();

        if (!data.success) {
          throw new Error("A API retornou success: false");
        }

        setProducts(data.products);
        setStatus("success");
      } catch (error) {
        if ((error as Error).name === "AbortError") return;
        console.error("Falha ao carregar produtos:", error);
        setStatus("error");
      }
    }

    loadProducts();

    return () => controller.abort();
  }, []);

  const maxIndex = Math.max(0, products.length - VISIBLE_CARDS);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setIndex(0);
  };

  const handlePrev = () => setIndex((current) => Math.max(0, current - 1));
  const handleNext = () =>
    setIndex((current) => Math.min(maxIndex, current + 1));

  return (
    <section className="related" aria-labelledby="related-title">
      <div className="container">
        <h2 id="related-title" className="related__title">
          Produtos relacionados
        </h2>

        {variant === "tabs" && (
          <ul className="related__tabs" role="tablist">
            {tabs.map(({ label, value }) => (
              <li
                key={value}
                className="related__tab-item"
                role="presentation"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === value}
                  className={`related__tab${
                    activeTab === value ? " related__tab--active" : ""
                  }`}
                  onClick={() => handleTabChange(value)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        )}

        {variant === "see-all" && (
          <a href="#" className="related__see-all">
            Ver todos
          </a>
        )}

        {status === "loading" && (
          <p className="related__status">Carregando produtos...</p>
        )}

        {status === "error" && (
          <p className="related__status related__status--error">
            Não foi possível carregar os produtos. Tente novamente mais tarde.
          </p>
        )}

        {status === "success" && (
          <div className="related__carousel">
            <button
              type="button"
              className="related__arrow related__arrow--prev"
              aria-label="Produtos anteriores"
              onClick={handlePrev}
              disabled={index === 0}
            >
              <ChevronIcon direction="left" />
            </button>

            <div className="related__viewport">
              <ul
                className="related__track"
                style={{
                  transform: `translateX(calc(${index} * -1 * (100% + 16px) / ${VISIBLE_CARDS}))`,
                }}
              >
                {products.map((product) => (
                  <li key={product.productName} className="related__slide">
                    <ProductCard
                      product={product}
                      onClick={setSelectedProduct}
                    />
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              className="related__arrow related__arrow--next"
              aria-label="Próximos produtos"
              onClick={handleNext}
              disabled={index >= maxIndex}
            >
              <ChevronIcon direction="right" />
            </button>
          </div>
        )}
      </div>

      <ProductModal
        key={selectedProduct?.productName ?? "empty"}
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}