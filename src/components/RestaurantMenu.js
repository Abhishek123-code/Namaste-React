import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurants from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resMenu } = useParams();
  console.log(resMenu);

  const resInfo = useRestaurants(resMenu);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, cloudinaryImageId, avgRating, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  console.log(name);

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);

  return (
    <div className="resMenu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>
        {avgRating} - {costForTwoMessage}
      </h3>
      <h2>Menu</h2>
      <ul className="menu">
        {itemCards.map((res) => (
          <li key={res.card.info.id}>
            {res.card.info.name} -- Rs.{" "}
            {res.card.info.price / 100 || res.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
