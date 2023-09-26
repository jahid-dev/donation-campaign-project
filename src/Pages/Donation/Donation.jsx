import  { useEffect, useState } from "react";
import DonationCardMain from "../../components/DonationCard/DonationCardMain";
import { useLoaderData } from "react-router-dom";

const Donation = () => {
  const { data } = useLoaderData();

  const [donated, setDonated] = useState([]);
  const [noData, setNoData] = useState(false);

  useEffect(() => {
    const donatedAll = JSON.parse(localStorage.getItem("donates"));
    if (donatedAll) {
      setDonated(donatedAll);
    } else {
      setNoData("No Data Found");
    }
  }, []);

  return (
    <div>
      {noData ? (
        <p>No Data Found</p>
      ) : (
        <DonationCardMain donated={donated} ></DonationCardMain>
      )}
    </div>
  );
};


export default Donation;