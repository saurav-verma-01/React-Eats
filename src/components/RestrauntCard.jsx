const RestrauntCard = () => {
  return (
    <div className="restraunt-card">
      <div className="restraunt-img-container">
        <img
          src="https://b.zmtcdn.com/data/pictures/0/19020470/67ff237e5fc7cf24e3f56a5159cf9ca8.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
          alt="restraunt bannner"
          className="restraunt-img"
        />
      </div>
      <div className="restraunt-info">
        <h3 className="restraunt-name">Jai Shree Restraunt</h3>
        <div className="restraunt-rating">4.2⭐</div>
      </div>
      <div className="cuisines-info">
        <p className="cuisines">North Indian</p>
        <div className="cost-for-1">200 for one</div>
      </div>
      <p className="eta">32 mins</p>
    </div>
  );
};

export default RestrauntCard;
