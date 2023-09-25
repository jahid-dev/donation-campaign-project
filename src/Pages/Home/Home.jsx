import { useLoaderData } from "react-router-dom";
import HeroSection from "../../components/Header/HeroSection/HeroSection";


const Home = () => {
    useLoaderData();
    return (
        <div>
            <HeroSection></HeroSection>
        </div>
    );
};

export default Home;