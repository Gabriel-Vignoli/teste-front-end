import Brands from "./components/Brands/Brands";
import Categories from "./components/Categories/Categories";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Partners from "./components/Partners/Partners";
import RelatedProducts from "./components/RelatedProducts/RelatedProducts";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <RelatedProducts />
        <Partners />
        <Brands />
      </main>
    </>
  );
};

export default App;
