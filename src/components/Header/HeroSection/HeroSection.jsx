const HeroSection = () => {
    return (
      <div className="flex flex-col items-center justify-center h-[350px] gap-6">
        <h1 className="text-5xl text-center mb-6 font-extrabold">
          I Grow By Helping People In Need
        </h1>
        <div className=" rounded-md">
          <input
            type="text"
            placeholder="Search here..."
            className="w-[400px] px-4 border-2 border-r-0 border-[#DEDEDE] py-3 outline-none rounded-l-xl"
          />
          <button className="bg-[#FF444A] rounded-r-xl py-3 text-white text-lg font-bold px-5">
            Search
          </button>
        </div>
      </div>
    );
  };
  
  export default HeroSection;