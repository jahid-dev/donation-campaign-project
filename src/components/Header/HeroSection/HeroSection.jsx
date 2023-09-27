
import PropTypes from 'prop-types';
import { useState } from "react";


const HeroSection = ({ filter }) => {
  const [searchData, setSearchData] = useState("");
  
  const handleSearch = () => {
    filter(searchData)
    
  };

  return (
    <div className="relative h-[70vh]">
    <div className="absolute inset-0 z-0 bg-[url('https://i.ibb.co/4Ws5tkV/Rectangle-4287.png')] opacity-20 bg-cover bg-center"></div>
    <div className="flex flex-col items-center justify-center h-full relative">
    <div className="md:h-[350px] h-[300px] gap-6 flex flex-col items-center justify-center">
      <h1 className="md:text-5xl text-3xl text-center mb-6 font-extrabold">
        I Grow By Helping People In Need
      </h1>
      <div className="md:flex-none flex rounded-md">
        <input
          onChange={(e) => setSearchData(e.target.value)}
          type="text"
          placeholder="Search here..."
          className="md:w-[400px] w-[250px] px-4 border-2 border-r-0 border-[#DEDEDE] py-3 outline-none rounded-l-xl"
        />
        <button
          onClick={() => handleSearch()}
          className="bg-[#FF444A] rounded-r-xl py-3 text-white text-lg font-bold px-5"
        >
          Search
        </button>
      </div>
    </div>
    </div>
    </div>
  );
};


HeroSection.propTypes = {
  filter: PropTypes.func
};

export default HeroSection;






