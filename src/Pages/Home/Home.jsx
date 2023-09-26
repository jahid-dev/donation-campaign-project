import HomeCardMain from "../../components/HomeCard/HomeCardMain";
import { useLoaderData } from "react-router-dom";
import HeroSection from "../../components/Header/HeroSection/HeroSection";


const Home = () => {
   const {data} = useLoaderData();
    return (
        <div>
            <HeroSection data={data}></HeroSection>
            <HomeCardMain donates = {data}></HomeCardMain>
        </div>
    );
};

export default Home;