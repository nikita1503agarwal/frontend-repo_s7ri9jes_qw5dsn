import Navbar from './components/Navbar';
import SellerHero from './components/SellerHero';
import Benefits from './components/Benefits';
import ProductShowcase from './components/ProductShowcase';
import CTA from './components/CTA';
import SimpleFooter from './components/SimpleFooter';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <SellerHero />
        <Benefits />
        <ProductShowcase />
        <CTA />
      </main>
      <SimpleFooter />
    </div>
  );
}

export default App;
