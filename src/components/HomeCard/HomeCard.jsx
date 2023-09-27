import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HomeCard = ({ donate }) => {
  const {
    id,
    title,
    card_bg,
    category,
    category_bg,
    picture,
    text_button_bg,
  } = donate;

  return (
    <Link to={`/donation/${id}`}>
      <div
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
    </Link>
  );
};

HomeCard.propTypes = {
  donate: PropTypes.object.isRequired,
};

export default HomeCard;
