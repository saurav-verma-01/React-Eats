import RestrauntCard from "./RestrauntCard";
import restaurants from "../restrauntData";
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
