import PropTypes from 'prop-types';
import HomeCard from "./HomeCard";

const HomeCardMain = ({ donates }) => {

  return (
    <div className="grid grid-cols-4 gap-5 mt-5">
      {donates.map((donate) => (
        <HomeCard key={donate.id} donate={donate} />
      ))}
    </div>
  );
};
HomeCardMain.propTypes = {
    donates : PropTypes.object
  }
export default HomeCardMain;
