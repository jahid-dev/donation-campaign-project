import PropTypes from 'prop-types';
import  { useState } from "react";


const HomeCard = ({ donate }) => {
  const [donated, setDonated] = useState([]);

  const {
    title,
    card_bg,
    category,
    category_bg,
    picture,
    text_button_bg,
  } = donate;
 
  const handleDonate = () => {
    const donates = localStorage.getItem("donates");
    if (donates) {
      alert("Donates");
    } else {
      setDonated([...donated, donate]);
      console.log(donated);
    }
  };

  return (
    <div
      onClick={() => handleDonate()}
      style={{ backgroundColor: card_bg }}
      className={` rounded-lg cursor-pointer`}
    >
      <img className="w-full" src={picture} alt="" />
      <div className="p-4 space-y-3">
        <span
          style={{ backgroundColor: category_bg, color: text_button_bg }}
          className="text-[#0052FF] px-4 py-1 font-medium text-sm rounded-md "
        >
          {category}
        </span>
        <p style={{ color: text_button_bg }} className=" font-bold text-xl">
          {title}
        </p>
      </div>
    </div>
  );
};

HomeCard.propTypes = {
  donate : PropTypes.object
}

export default HomeCard;
