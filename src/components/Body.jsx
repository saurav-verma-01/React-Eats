import { useState } from "react";
import restaurants from "../utils/constants";
import RestrauntContainer from "./RestrauntContainer";

const Body = () => {
  const [restrauntList, setRestrauntList] = useState(restaurants);

  const filterRestraunt = () => {
    const filteredRestraunt = restrauntList.filter(
      (res) => res.info.avgRating > 4
    );
    setRestrauntList(filteredRestraunt);
  };

  const allRestraunt = () => {
    setRestrauntList(restaurants);
  };
  return (
    <main>
      <div className="container">
        <div className="filter-container">
          <button className="btn filter-btn" onClick={filterRestraunt}>
            Top Rated
          </button>
          <button className="btn all-btn" onClick={allRestraunt}>
            All
          </button>
        </div>
        <RestrauntContainer restrauntAr={restrauntList} />
      </div>
    </main>
  );
};

export default Body;
