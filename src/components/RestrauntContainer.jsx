import RestrauntCard from "./RestrauntCard";
const RestrauntContainer = ({ restrauntAr }) => {
  const listOFRestraunt = restrauntAr;

  return (
    <div className="restraunt-container">
      {listOFRestraunt.map((rest) => {
        return <RestrauntCard key={rest.info.id} rest={rest} />;
      })}
    </div>
  );
};

export default RestrauntContainer;
