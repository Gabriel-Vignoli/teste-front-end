import Brands from "./components/Brands/Brands";
import Categories from "./components/Categories/Categories";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Newsletter from "./components/Newsletter/Newsletter";
import Partners from "./components/Partners/Partners";
import RelatedProducts from "./components/RelatedProducts/RelatedProducts";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <RelatedProducts variant="tabs" />
        <Partners />
        <RelatedProducts variant="see-all" />
        <Partners />
        <Brands />
        <RelatedProducts variant="see-all" />
        <Newsletter />
        <Footer />
      </main>
    </>
  );
};

export default App;
