import Categories from "./components/Categories/Categories";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import RelatedProducts from "./components/RelatedProducts/RelatedProducts";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <RelatedProducts />
      </main>
    </>
  );
};

export default App;
