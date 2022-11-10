import Hero from "../components/Hero";
import Arrival from "../components/Arrival";
import About from "../components/About";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Homepage = () => {
    return (
        <>
            <Hero/>
            <Arrival/>
            <About/>
            <Newsletter/>
            <Footer/>
        </>
    );
}

export { Homepage };