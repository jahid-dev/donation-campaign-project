import HomeCardMain from "../../components/HomeCard/HomeCardMain";

import HeroSection from "../../components/Header/HeroSection/HeroSection";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const { data } = useLoaderData();
  const [filteredCards, setFilteredCards] = useState(data);


const handleFilter = (searchData) =>{
    const lowerInputValue = searchData.toLowerCase();
    const filtered = data.filter((card) =>
      card.category.toLowerCase().includes(lowerInputValue)
    );
    setFilteredCards(filtered);
}
  return (
    <div>
      <HeroSection filter={handleFilter} />
      <HomeCardMain donates={filteredCards} />
    </div>
  );
};

export default Home;
