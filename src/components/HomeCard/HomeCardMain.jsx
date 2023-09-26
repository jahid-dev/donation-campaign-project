import PropTypes from 'prop-types';
import HomeCard from "./HomeCard";

const HomeCardMain = ({ donates }) => {

  return (
    <div className="grid md:grid-cols-4 grid-cols-1 gap-5 mt-5">
      {donates.map((donate) => (
        <HomeCard key={donate.id} donate={donate}></HomeCard>
      ))}
    </div>
  );
};
HomeCardMain.propTypes = {
    donates : PropTypes.array
  }
export default HomeCardMain;
