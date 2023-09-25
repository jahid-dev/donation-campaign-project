import { useLoaderData } from "react-router-dom";
import HeroSection from "../../components/Header/HeroSection/HeroSection";
import HomeCardMain from "../../components/HomeCard/HomeCardMain";


const Home = () => {
   const {data} = useLoaderData();
    return (
        <div>
            <HeroSection></HeroSection>
            <HomeCardMain donates = {data}></HomeCardMain>
        </div>
    );
};

export default Home;