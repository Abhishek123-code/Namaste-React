import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurants from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resMenu } = useParams();
  // console.log(resMenu);

  const [showIndex, setshowIndex] = useState(null);

  //fetching the data
  const resInfo = useRestaurants(resMenu);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, cloudinaryImageId, avgRating, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  // console.log(name);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (el) =>
        el.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center ">
      <h1 className="text-4xl font-bold my-7">{name}</h1>
      <h3 className="text-xl font-bold">{cuisines.join(", ")}</h3>
      <h3 className="text-xl font-bold">
        {avgRating} - {costForTwoMessage}
      </h3>
    
      {categories.map((Category, index) => (
        //controlled component
        <RestaurantCategory
          data={Category?.card?.card}
          key={Category?.card?.card?.title}
          showItems={index === showIndex && true}
          setshowIndex={() =>
            showIndex !== null ? setshowIndex(null) : setshowIndex(index)
          }
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
