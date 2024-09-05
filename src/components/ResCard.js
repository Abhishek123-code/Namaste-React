import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
  const { resDetails } = props;
  const { name, avgRating, cuisines, costForTwo, sla, cloudinaryImageId } =
    resDetails?.info;

  return (
    <div className="resCard item">
      <div className="resImg">
        <img
          src={CDN_URL + cloudinaryImageId}
          className="res-img"
          alt="Res-Img"
        />
      </div>

      <div className="resInfo">
        <h4>{name}</h4>
        <span>{avgRating}</span>
        <span>{sla.slaString}</span>
        <p>{cuisines.join(", ")}</p>
        <p>{costForTwo}</p>
      </div>
    </div>
  );
};

export default ResCard;
