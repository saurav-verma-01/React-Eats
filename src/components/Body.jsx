import { useEffect, useState } from "react";
import restaurants from "../utils/constants";
import RestrauntContainer from "./RestrauntContainer";
// const SWIGGY_API_URL = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.4924134&lng=77.673673&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
// `;
const Body = () => {
  const [restrauntList, setRestrauntList] = useState(restaurants);

  useEffect(() => {
    fetchRestrauntData();
  }, []);

  const fetchRestrauntData = async () => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.4924134&lng=77.673673&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const swiggyData = await response.json();

    const swiggyRestraunts =
      swiggyData.data.cards[5].card.card.gridElements.infoWithStyle.restaurants;

    console.log(swiggyRestraunts);
    setRestrauntList(swiggyRestraunts);
  };

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
