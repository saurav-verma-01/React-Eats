import { IMAGE_URL } from "../utils/constants";

const RestrauntCard = ({ rest }) => {
  const { name, cloudinaryImageId, avgRating, costForTwo, cuisines, sla } =
    rest.info;

  return (
    <div className="restraunt-card">
      <div className="restraunt-img-container">
        <img
          src={IMAGE_URL + cloudinaryImageId}
          alt={name}
          className="restraunt-img"
        />
      </div>

      <h3 className="restraunt-name">{name}</h3>

      <div className="restraunt-info">
        <div className="restraunt-rating">{avgRating} ⭐</div>
        <p className="eta">{sla.deliveryTime} mins</p>
      </div>

      <div className="cost-for-2">{costForTwo}</div>
      <p className="cuisines">{cuisines.join(", ")}</p>
    </div>
  );
};

export default RestrauntCard;
