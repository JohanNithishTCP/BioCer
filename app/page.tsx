import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import AnimatedVideo from "./components/AnimatedVideo";
import ProductPortfolio from "./components/ProductPortfolio";
import Insights from "./components/Insights";
import TradeFair from "./components/TradeFair";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-primary/20 overflow-x-hidden">
      <Header />
      <main>
        <Banner />
        <About />
        <Services />
        <AnimatedVideo />
        <ProductPortfolio />
        <Insights />
        <TradeFair />
      </main>
      <Footer />
    </div>
  );
}
