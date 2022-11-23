import Hero from "../components/Hero";
import Arrival from "../components/Arrival";
import About from "../components/About";
import Newsletter from "../components/Newsletter";


const Homepage = () => {
    return (
        <>
            <Hero/>
            <Arrival/>
            <About/>
            <Newsletter/>
        </>
    );
}

export { Homepage };