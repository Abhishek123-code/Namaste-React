import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
  const { resDetails } = props;
  const { name, avgRating, cuisines, costForTwo, sla, cloudinaryImageId } =
    resDetails?.info;

  return (
    <div className="p-0 h-80 hover:p-2 duration-200 box-border ">
      <div className="mb-3 h-[50%]  rounded-2xl ">
        <img
          src={CDN_URL + cloudinaryImageId}
          className="object-cover rounded-2xl w-[100%] h-[100%] "
          alt="Res-Img"
        />
      </div>

      <div className="px-3 ">
        <h3 className="font-bold text-lg overflow-hidden whitespace-nowrap text-ellipsis">{name}</h3>
        <span className="overflow-hidden whitespace-nowrap text-ellipsis">{avgRating}</span>
        <span className="overflow-hidden whitespace-nowrap text-ellipsis">{sla.slaString}</span>
        <p className="overflow-hidden whitespace-nowrap text-ellipsis">{cuisines.join(", ")}</p>
        <p className="overflow-hidden whitespace-nowrap text-ellipsis">{costForTwo}</p>
      </div>
    </div>
  );
};

export default ResCard;
