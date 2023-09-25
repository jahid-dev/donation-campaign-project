import PropTypes from 'prop-types';

const DonationCard = ({ donate }) => {
  const {
    title,
    card_bg,
    category,
    category_bg,
    picture,
    price,
    text_button_bg,
  } = donate;
  return (
    <div
      style={{ backgroundColor: card_bg }}
      className={` flex w-full flex-row rounded-lg `}
    >
      <div className=" w-5/12 ">
        <img className="w-full h-full" src={picture} />
      </div>
      <div className="p-5 w-7/12 space-y-2">
        <span
          style={{ backgroundColor: category_bg, color: text_button_bg }}
          className="text-[#0052FF] px-4 py-1 font-medium text-sm rounded-md bg-[#0052FF33]"
        >
          {category}
        </span>
        <p className="text-[#0B0B0B] text-lg font-semibold">{title}</p>
        <p
          style={{ color: text_button_bg }}
          className="font-semibold text-base"
        >
          $ {price.toFixed(2)}
        </p>
        <button
          style={{ backgroundColor: text_button_bg }}
          className="px-5 py-2 rounded-md text-white text-lg font-semibold"
        >
          View Details
        </button>
      </div>
    </div>
  );
};
DonationCard.propTypes = {
    donate : PropTypes.object
  }
  
export default DonationCard;
