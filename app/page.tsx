import Header from "./_components/Header";
import Banner from "./_components/Banner";
import About from "./_components/About";
import Services from "./_components/Services";
import AnimatedVideo from "./_components/AnimatedVideo";
import ProductPortfolio from "./_components/ProductPortfolio";
import Insights from "./_components/Insights";
import TradeFair from "./_components/TradeFair";
import Footer from "./_components/Footer";

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
