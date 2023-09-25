import PropTypes from 'prop-types';
import DonationCard from "./DonationCard";

const DonationCardMain = ({ donates }) => {
  return (
    <div className="grid grid-cols-2 gap-5">
      {donates.map((donate) => (
        <DonationCard key={donate.id} donate={donate} />
      ))}
    </div>
  );
};
DonationCardMain.propTypes = {
    donates : PropTypes.array
  }
export default DonationCardMain;
