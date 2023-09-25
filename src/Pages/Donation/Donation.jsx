
import { useLoaderData } from "react-router-dom";
import DonationCardMain from "../../components/DonationCard/DonationCardMain";

const Donation = () => {
  const { data } = useLoaderData();
  return (
    <div>
      <DonationCardMain donates={data}></DonationCardMain>
    </div>
  );
};

export default Donation;