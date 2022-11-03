import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Arrival from "./components/Arrival";
import About from "./components/About";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="w-full overflow-hidden bg-primary">
        <div className="flex justify-center items-center">
            <div className="w-full">
                <Navbar />
                <Hero />
                <Arrival />
                <About />
                <Newsletter />
                <Footer />
            </div>
        </div>
    </div>
  )
}

export default App
