
import { useLoaderData } from "react-router-dom";
import PieCompo from "../../components/PieCompo/PieCompo";

const Statistics = () => {
  const { data } = useLoaderData();

  return (
    <div>
      <PieCompo data={data}></PieCompo>
    </div>
  );
};

export default Statistics;
