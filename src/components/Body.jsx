import RestrauntContainer from "./RestrauntContainer";

const Body = () => {
  return (
    <main>
      <div className="container">
        {/* <div className="searchbar">Search bar</div> */}
        <div className="filter-container">
          <button className="filter-btn" onClick={() => console.log("FILTER")}>
            Top Rated
          </button>
        </div>
        <RestrauntContainer />
      </div>
    </main>
  );
};

export default Body;
