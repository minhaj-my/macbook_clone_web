import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewer";

const App = () => {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <Hero />
      <ProductViewer />
    </div>
  );
};

export default App;
