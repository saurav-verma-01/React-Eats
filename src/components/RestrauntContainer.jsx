import { restaurants } from "../utils/constants";
import RestrauntCard from "./RestrauntCard";
const RestrauntContainer = () => {
  return (
    <div className="restraunt-container">
      {restaurants.map((rest) => {
        return <RestrauntCard key={rest.info.id} rest={rest} />;
      })}
    </div>
  );
};

export default RestrauntContainer;
